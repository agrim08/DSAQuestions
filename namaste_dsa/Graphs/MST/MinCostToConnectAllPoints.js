class MinHeap {
    constructor() {
        this.heap = []
    }

    push(item) {
        this.heap.push(item)
        this.bubbleUp(this.heap.length - 1)
    }

    pop() {
        if (this.heap.length === 1) return this.heap.pop()

        const min = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.bubbleDown(0)
        return min
    }

    bubbleUp(index) {
        while (index > 0) {
            let parent = Math.floor((index - 1) / 2)
            if (this.heap[parent][0] <= this.heap[index][0]) break
            ;[this.heap[parent], this.heap[index]] =
            [this.heap[index], this.heap[parent]]
            index = parent
        }
    }

    bubbleDown(index) {
        let n = this.heap.length
        while (true) {
            let smallest = index
            let left = 2 * index + 1
            let right = 2 * index + 2

            if (left < n && this.heap[left][0] < this.heap[smallest][0])
                smallest = left
            if (right < n && this.heap[right][0] < this.heap[smallest][0])
                smallest = right

            if (smallest === index) break
            ;[this.heap[index], this.heap[smallest]] =
            [this.heap[smallest], this.heap[index]]
            index = smallest
        }
    }

    isEmpty() {
        return this.heap.length === 0
    }
}

var minCostConnectPoints = function(points) {
    let n = points.length
    let visited = Array(n).fill(false)
    let pq = new MinHeap()
    pq.push([0, 0])

    let answer = 0
    let connected = 0
    // Prim's Algorithm
    while(connected < n){
        let [weight, node] = pq.pop()

        if(visited[node]) continue

        visited[node] = true
        connected++
        answer += weight

        // Add all edges from the current node to the priority queue
        // (given input points in space not an adjacency list)
        for (let v = 0; v < n; v++) {
            if (!visited[v]) {
                let dist =
                    Math.abs(points[node][0] - points[v][0]) +
                    Math.abs(points[node][1] - points[v][1])
                pq.push([dist, v])
            }
        }
    }
    return answer
};