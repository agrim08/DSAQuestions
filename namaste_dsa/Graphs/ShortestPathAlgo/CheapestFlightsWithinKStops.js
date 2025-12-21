//approach 1: Bellman-Ford Algorithm
var findCheapestPrice = function(n, flights, src, dst, k) {
    let dist = new Array(n).fill(Infinity)
    dist[src] = 0

    for(let i = 0; i < k + 1; i++){
        let temp = [...dist]
        for(let [u, v, w] of flights){
            if(dist[u] != Infinity && dist[u] + w < temp[v]){
                temp[v] = dist[u] + w
            }
        }
        dist = temp
    }

    return dist[dst] === Infinity ? -1 : dist[dst]
};

//approach 2: BFS + store weight
var findCheapestPrice = function(n, flights, src, dst, k) {
    let graph = Array.from({length: n}, () => [])
    for(let [from, to, cost] of flights){
        graph[from].push([to, cost])
    }

    let q = [[src, 0, 0]] //node, cost, stops
    let minCost = new Array(n).fill(Infinity)

    while(q.length){
        let [node, cost, stops] = q.shift()

        //if stops exceed k, continue
        if(stops > k) continue

        for(let [neighbor, price] of graph[node]){
            let newCost = cost + price
            if(newCost < minCost[neighbor]){
                minCost[neighbor] = newCost
                q.push([neighbor, newCost, stops + 1])
            }
        }
    }
    return minCost[dst] === Infinity ? -1 : minCost[dst]
}