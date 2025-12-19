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