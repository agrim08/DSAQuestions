function bfsUnweighted(graph, source) {
    let n = graph.length
    let dist = new Array(n).fill(Infinity)
    dist[source] = 0
    let q = [source]

    while (q.length) {
        let curr = q.shift()
        for(let neighbor of graph[curr]) {
            if(dist[neighbor] == Infinity) {
                dist[neighbor] = dist[curr] + 1
                q.push(neighbor)
            }
        }
    }
    return dist
}

const graph = [
    [1, 2],
    [3],
    [4],
    [5],
    [3],
    []
]

console.log(bfsUnweighted(graph, 0)) // [0, 1, 1, 2, 2, 3]