/**
 * Approach: Dijkstra's Algorithm with Path Counting.
 * Intuitively, we use Dijkstra to find the shortest time to reach each node.
 * If we find a new shorter path, we reset the count; if we find a path of 
 * equal length, we add the number of ways to reach the previous node to the current one.
 */
var countPaths = function(n, roads) {
    //adjancency list
    let graph = Array.from({ length: n }, () => [])
    for(let [u, v, w] of roads){
        graph[u].push([v, w])
        graph[v].push([u, w])
    }

    //define priority queue, minWeight array and pathCount array
    let pq = new MinPriorityQueue(x => x[0])
    let minWeight = new Array(n).fill(Infinity)
    let pathCount = new Array(n).fill(0)

    pq.push([0, 0])
    minWeight[0] = 0
    pathCount[0] = 1

    //Dijkstra Algo
    while(!pq.isEmpty()){
        let [currW, curr] = pq.pop()

        if (currW > minWeight[curr]) continue;

        for(let [neighbor, weight] of graph[curr]){
            let newWeight = currW + weight
            if(newWeight < minWeight[neighbor]){
                minWeight[neighbor] = newWeight
                pq.push([newWeight, neighbor])
                pathCount[neighbor] = pathCount[curr]
            }
            //alternative shortest pathCount
            else if(newWeight == minWeight[neighbor]){
                pathCount[neighbor] = (pathCount[curr] + pathCount[neighbor]) % (1e9 + 7)
            }
        }
    }
    return pathCount[n - 1]
};