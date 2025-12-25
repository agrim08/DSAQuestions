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

function primsMST(graph, n) {
    let visited = Array(n).fill(false)
    let pq = new MinHeap()
    pq.push([0, 0])

    let totalWeight = 0
    let edgesUsed = 0
    while (edgesUsed < n) {
        let [weight, node] = pq.pop()

        if (visited[node]) continue

        visited[node] = true
        edgesUsed++
        totalWeight += weight

        for (let [neighbor, weight] of graph[node]) {
            if (!visited[neighbor]) {
                pq.push([weight, neighbor])
            }
        }
    }
    return totalWeight
}

const graph = [
    [[1, 4], [2, 2], [3, 5]],
    [[0, 4], [3, 1]],
    [[0, 2], [3, 3]],
    [[1, 1], [2, 3]],
]
const n = 4
console.log(primsMST(graph, n))

