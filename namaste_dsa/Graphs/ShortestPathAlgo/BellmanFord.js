//negative cycle shortest path using Bellman-Ford algorithm

var bellmanFord = function(n, edges, src) {
    let dist = new Array(n).fill(Infinity)
    dist[src] = 0

    for (let i = 0; i < n - 1; i++) {
        for (let [u, v, w] of edges) {
            if (dist[u] !== Infinity && dist[u] + w < dist[v]) {
                dist[v] = dist[u] + w
            }
        }
    }

    // Check for negative cycles
    for (let [u, v, w] of edges) {
        if (dist[u] !== Infinity && dist[u] + w < dist[v]) {
            return -1 // Negative cycle detected
        }
    }

    return dist
}