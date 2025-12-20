//DFS
function topologicalSort(n, graph) {
  let visited = new Set()
  let ans = []

  let dfs = (curr) => {
    visited.add(curr)
    for (let neighbor of graph[curr]) {
      if (!visited.has(neighbor)) {
        dfs(neighbor)
      }
    }
    ans.push(curr)
  }

  for (let i = 0; i < n; i++){ //needed if graoph is disconnected
    if (!visited.has(i)) {
      dfs(i)
    }
  }
  return ans.reverse()
}