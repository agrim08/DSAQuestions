function countSubmatrices(matrix, target) {
    let n = matrix.length
    let m = matrix[0].length
    let count = 0

    for(let i = 0; i < n; i++){
        for(let j = 0; j < m; j++){
            if(i > 0) grid[i][j] += grid[i - 1][j]
            if(j > 0) grid[i][j] += grid[i][j - 1]
            if(i > 0 && j > 0) grid[i][j] -= grid[i - 1][j - 1]

            if(grid[i][j] <= target) count++
        }
    }

    return count
}
    
