class MinHeap1 {
    constructor() {
        this.heap = [];
    }

    size() {
        return this.heap.length;
    }

    peek() {
        return this.heap[0];
    }

    push(val) {
        this.heap.push(val);
        this.bubbleUp();
    }

    pop() {
        if (this.size() === 1) return this.heap.pop();

        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown();
        return min;
    }

    bubbleUp() {
        let idx = this.size() - 1;
        while (idx > 0) {
            let parent = Math.floor((idx - 1) / 2);
            if (this.heap[parent][0] <= this.heap[idx][0]) break;
            [this.heap[parent], this.heap[idx]] = [this.heap[idx], this.heap[parent]];
            idx = parent;
        }
    }

    bubbleDown() {
        let idx = 0;
        while (true) {
            let left = 2 * idx + 1;
            let right = 2 * idx + 2;
            let smallest = idx;

            if (left < this.size() && this.heap[left][0] < this.heap[smallest][0]) {
                smallest = left;
            }
            if (right < this.size() && this.heap[right][0] < this.heap[smallest][0]) {
                smallest = right;
            }
            if (smallest === idx) break;

            [this.heap[idx], this.heap[smallest]] = [this.heap[smallest], this.heap[idx]];
            idx = smallest;
        }
    }
}


var topKFrequent = function(nums, k) {
    let map = new Map()

    for(let num of nums){
        map.set(num, (map.get(num) || 0) + 1)
    }

    const heap = new MinHeap1()

    for(let [num, freq] of map.entries()){
        heap.push([freq, num])
        if(heap.size() > k){
            heap.pop()
        }
    }

    const res = []
    while(heap.size()){
        res.push(heap.pop()[1])
    }

    return res
};