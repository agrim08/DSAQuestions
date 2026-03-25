var canPartitionGrid = function(grid) {
    let n = grid.length
    let m = grid[0].length
    let totalSum = 0

    for(let i = 0; i < n; i++){
        for(let j = 0; j < m; j++){
            totalSum += grid[i][j]
        }
    }
    if(totalSum % 2 !== 0) return false

    let target = totalSum / 2

    let curr = 0

    for(let i = 0; i < n - 1; i++) {
        let rowSum = 0
        for(let j = 0; j < m; j++){
            rowSum += grid[i][j]
        }
        curr += rowSum

        if(curr === target) return true
    }

    curr = 0
    for(let i = 0; i < m - 1; i++){
        let colSum = 0
        for(let j = 0; j < n; j++){
            colSum += grid[j][i]
        }
        curr += colSum

        if(curr === target) return true
    }
    return false
};