```
/**
 * @description Evaluates division queries using a weighted directed graph and DFS.
 * 
 * Approach:
 * 1. Graph Construction: Represent variables as nodes. For equation a/b = k, 
 *    create an edge a -> b with weight k and b -> a with weight 1/k.
 * 2. DFS Traversal: For each query (src, dst), search for a path.
 *    - Base Case: If src === dst, return 1.0.
 *    - Recursion: Result = edgeWeight * DFS(neighbor, dst).
 *    - Cycle Prevention: Use a 'visited' set to track nodes in the current path.
 * 
 * State Space Tree (Query: a / c):
 * [a]
 *  └── (2.0) ──▶ [b]
 *               ├── (0.5) ──▶ [a] (Visited - Pruned)
 *               └── (3.0) ──▶ [c] (Target Found!)
 * 
 * Dry Run:
 * Equations: a/b=2.0, b/c=3.0 | Query: a/c
 * - DFS("a", "c"): Neighbors of "a" is {"b": 2.0}.
 *   - DFS("b", "c"): Neighbors of "b" are {"a": 0.5, "c": 3.0}.
 *     - Skip "a" (visited).
 *     - DFS("c", "c"): src === dst, returns 1.0.
 *   - "b" receives 1.0, returns 3.0 * 1.0 = 3.0.
 * - "a" receives 3.0, returns 2.0 * 3.0 = 6.0.
 */
```

var calcEquation = function(equations, values, queries) {
    let graph = {}

    for(let i = 0; i < equations.length; i++){
        let [a, b] = equations[i]
        let val = values[i]

        if(!graph[a]) graph[a] = {}
        if(!graph[b]) graph[b] = {}

        graph[a][b] = val
        graph[b][a] = 1/val
    }

    let dfs = (src, dst, visited) => {
        if(!(src in graph)) return -1
        if(src === dst) return 1

        visited.add(src)

        for(let neighbor in graph[src]){
            if(!visited.has(neighbor)){
                let res = dfs(neighbor, dst, visited)

                if(res != -1){
                    return res * graph[src][neighbor]
                }
            }
        }
        return -1
    }

    let res = []
    for(let [a, b] of queries){
        res.push(dfs(a, b, new Set()))
    }

    return res
};