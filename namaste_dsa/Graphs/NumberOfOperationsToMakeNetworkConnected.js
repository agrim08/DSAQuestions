/**
 * Approach: BFS / Connected Components.
 * Intuitively, we need `N-1` cables to connect `N` computers. We first check 
 * if we have enough total cables. If so, we count the number of separate 
 * connected components; the moves needed is simply `components - 1`.
 */
var makeConnected = function(n, connections) {
    if(connections.length < n - 1){
        return -1
    }

    let graph = Array.from({length: n}, () => [])

    for(let [from, to] of connections){
        graph[from].push(to)
        graph[to].push(from)
    }

    let visited = new Array(n).fill(false)
    let noOfComponents = 0

    for(let i = 0; i < n; i++){
        if(!visited[i]){
            noOfComponents++
            bfs(i, visited, graph)
        }
    }

    return noOfComponents - 1
};

let bfs = (src, visited, graph) => {
    let q = [src]
    visited[src] = true
    while(q.length){
        let curr = q.shift()
        visited[curr] = true
        for(let neighbor of graph[curr]){
            if(!visited[neighbor]){
                visited[neighbor] = true
                q.push(neighbor)
            }
        }
    }
}