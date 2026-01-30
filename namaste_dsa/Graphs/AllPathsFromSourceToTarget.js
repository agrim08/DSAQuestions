/**
 * Approach: Backtracking / DFS.
 * Intuitively, we explore every possible branch starting from node 0.
 * Whenever we reach the last node, we record the path taken. We then
 * backtrack to explore other potential edges from previous nodes.
 */
let allPathsSourceTarget = (graph) => {
    let end = graph.length - 1
    let ans = []

    let dfs = (path, curr) => {
        if(curr === end){
            ans.push([...path])
            return
        }
        for(let neighbor of graph[curr]){
            path.push(neighbor)
            dfs(neighbor)
            path.pop()
        }
    }

    dfs([0], 0)
    return ans
}