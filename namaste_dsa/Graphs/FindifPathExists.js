/**
 * Approach: BFS Traversal.
 * Intuitively, we explore the graph layer by layer starting from the source.
 * If we eventually reach the destination node during our traversal, a valid 
 * path exists. We use a visited set to avoid infinite loops.
 */
var validPath = function(n, edges, source, destination) {
    let q = [source]
    let visited = new Set()
    let map = {}
    //create map
    for(let [x, y] of edges){
        if(!map[x]) map[x] = []
        if(!map[y]) map[y] = []

        map[x].push(y)
        map[y].push(x)
    }

    //start bfs
    while(q.length){
        let curr = q.shift()
        if(curr === destination){
            return true
        }
        for(let neighbor of map[curr]){
            if(!visited.has(neighbor)){
                q.push(neighbor)
                visited.add(neighbor)
            }
        }
    }
    return false
};