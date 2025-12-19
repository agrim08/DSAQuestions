var findItinerary = function(tickets) {
    let graph = {}
    
    for(let [from, to] of tickets){
        if(!graph[from]) graph[from] = []
        graph[from].push(to)
    }

    for(let node in graph){
        graph[node].sort()
    }

    let path = []

    let dfs = (curr) => {
        let destinations = graph[curr] || []
        while(destinations.length){
            let neighbor = graph[curr].shift()
            dfs(neighbor)
        }
        //either this
        //path.unshift(curr)
        path.push(curr)
    }
    dfs("JFK")
    return path.reverse() //or this
};