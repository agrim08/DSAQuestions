var numIslands = function(grid) {
    if(!grid || grid.length == 0){
        return 0
    }

    let count = 0

    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid[0].length; j++){
            if(grid[i][j] == '1'){
                count++
                dfs(i, j)
            }
        }
    }

    function dfs(i, j){
        if (i < 0 || j < 0 || i >= grid.length || j >= grid[0].length || grid[i][j] === '0') return;

        grid[i][j] = '0'

        dfs(i + 1, j)
        dfs(i - 1, j)
        dfs(i, j + 1)
        dfs(i, j - 1)
    }

    return count
};