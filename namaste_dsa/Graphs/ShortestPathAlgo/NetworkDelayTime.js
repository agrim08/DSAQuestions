// Dijkstra's algorithm
var networkDelayTime = function(times, n, k) {
    // build adjacency list
    let graph = Array.from({ length: n + 1 }, () => [])
    for(let [u, v, w] of times){
        graph[u].push([v, w])
    }

    // distance array
    let dist = new Array(n + 1).fill(Infinity)
    dist[k] = 0

    // min heap priority queue
    let pq = [[0, k]]
    while(pq.length){
        //manual min heap
        pq.sort((a, b) => a[0] - b[0])
        let [time, currNode] = pq.shift()

        //stale value check
        if(time > dist[currNode]) continue

        for(let [neighbor, weight] of graph[currNode]){
            let newWeight = time + weight
            if(newWeight < dist[neighbor]){
                dist[neighbor] = newWeight
                pq.push([newWeight, neighbor])
            }
        }
    }

    // find max distance
    let ans = 0
    for (let i = 1; i <= n; i++) {
        if (dist[i] === Infinity) return -1
        ans = Math.max(ans, dist[i])
    }

    return ans
};