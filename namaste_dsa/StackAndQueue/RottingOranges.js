var orangesRotting = function(grid) {
    let m = grid.length
    let n = grid[0].length

    let queue = []
    //make the queue
    for(let i = 0; i < m; i++){
        for(let j = 0; j < n; j++){
            if(grid[i][j] === 2){
                queue.push([i , j, 0])
            }
        }
    }

    let maxMinutes = 0
    //mark adjecent to 2:
    while(queue.length){
        console.log(grid[0])
        console.log(grid[1])
        console.log(grid[2])
        console.log("---------")

        let [x, y, min] = queue.shift()
        if(x > 0 && grid[x - 1][y] === 1){
            grid[x - 1][y] = 2
            queue.push([x - 1, y, min + 1])
        }
        if(x < m - 1 && grid[x + 1][y] === 1){
            grid[x + 1][y] = 2
            queue.push([x + 1, y, min + 1])
        }
        if(y > 0 && grid[x][y - 1] === 1){
            grid[x][y - 1] = 2
            queue.push([x , y - 1, min + 1])
        }
        if(y < n -1 && grid[x][y + 1] === 1){
            grid[x][y + 1] = 2
            queue.push([x, y + 1, min + 1])
        }

        maxMinutes = Math.max(min, maxMinutes)
    }

    //run loop to check if anyother 1 is left:
    for(let i = 0; i < m; i++){
        for(let j = 0; j < n; j++){
            if(grid[i][j] === 1){
                return -1
            }
        }
    }

    return maxMinutes
};