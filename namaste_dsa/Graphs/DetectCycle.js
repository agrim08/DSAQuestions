/**
 * Approach: DFS Cycle Detection (Undirected).
 * Intuitively, a cycle exists if we encounter an already visited node that is 
 * not the direct parent of the current node. This means there's a back-edge 
 * forming a closed loop in the graph.
 */
//detect cycle in undirected connected graph using DFS

function hasCycle(edges) {
    let graph = {}

    //*create adjacency list
    for (let [x, y] of edges) {
        if(!graph[x]) graph[x] = []
        if (!graph[y]) graph[y] = []

        graph[x].push(y)
        graph[y].push(x)
    }

    let visited = new Set()
    let dfs = (curr, parent) => {
        visited.add(curr)
        for (let neighbor of graph[curr]) {
        if (!visited.has(neighbor)) {
            return dfs(neighbor, curr)
        }
        else if (neighbor != parent) {
            return true
        }
    }
        return false
    }
    return dfs(0, -1)
}