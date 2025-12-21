//kahn's algorithm for topological sort using BFS
function topologicalSort(n, graph) {
  let indegree = new Array(n).fill(0)

  for (let i = 0; i < n; i++){
    for (let node of graph[i] || []) {
      indegree[node]++
    }
  }


  let ans = []
  let q = []

  for (let i = 0; i < n; i++){
    if (indegree[i] === 0) {
      q.push(i)
    }
  }

  while (q.length) {
    let curr = q.shift()
    ans.push(curr)
    for (let neighbor of graph[curr]) {
      indegree[neighbor]--
      if (indegree[neighbor] === 0) {
        q.push(neighbor)
      }
    }
  }
  return ans
}