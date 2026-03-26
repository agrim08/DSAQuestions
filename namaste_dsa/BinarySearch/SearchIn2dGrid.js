var searchMatrix = function(grid, target) {
    let n = grid.length
    let m = grid[0].length

    let low = 0
    let high = (n * m) - 1

    while(low <= high){
        let mid = Math.floor((low + high) / 2)
        
        let row = Math.floor(mid / m)
        let col = mid % m 

        if(grid[row][col] === target) return true

        else if(grid[row][col] < target){
            low = mid + 1
        }
        else{
            high = mid - 1
        }
    }
    return false
};