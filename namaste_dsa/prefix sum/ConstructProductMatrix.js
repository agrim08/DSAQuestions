var constructProductMatrix = function(grid) {
    let n = grid.length
    let m = grid[0].length
    let mod = 12345
    let res = Array.from({length: n}, () => new Array(m).fill(1)) 

    let prefix = 1
    for(let i = 0; i < n; i++){
        for(let j = 0; j < m; j++){
            res[i][j] = prefix
            prefix = (prefix * grid[i][j]) % mod
        }
    }
    
    let suffix = 1
    for(let i = n - 1; i >= 0; i--){
        for(let j = m - 1; j >= 0; j--){
            res[i][j] = (res[i][j] * suffix) % mod
            suffix = (suffix * grid[i][j]) % mod
        }
    }

    return res
}
    
