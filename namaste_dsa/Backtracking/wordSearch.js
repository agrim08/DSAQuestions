/**
 * Approach: Backtracking / DFS.
 * Intuitively, we start from every cell matching the first letter of the word.
 * We explore all four directions, marking visited cells temporarily with a placeholder
 * to avoid cycles, and backtrack if the path doesn't lead to the target word.
 */
var exist = function(board, word) {
    let res = false
    let n = board.length
    let m = board[0].length

    let backtrack = (x, y, nextIndex) => {
        let org = board[x][y]
        board[x][y] = "#"

        if(nextIndex == word.length){
            res = true
            return
        }

        if(y < m - 1 && board[x][y + 1] == word[nextIndex]){
            backtrack(x, y + 1, nextIndex + 1)
        }
        if(y > 0 && board[x][y - 1] == word[nextIndex]){
            backtrack(x, y - 1, nextIndex + 1)
        }
        if(x < n - 1 && board[x + 1][y] == word[nextIndex]){
            backtrack(x + 1, y, nextIndex + 1)
        }
        if(x > 0 && board[x - 1][y] == word[nextIndex]){
            backtrack(x - 1, y, nextIndex + 1)
        }

        board[x][y] = org
    }

    for(let i = 0; i < n; i ++){
        for(let j = 0; j < m; j++){
            if(board[i][j] === word[0]){
                backtrack(i, j, 1)
            }
        }
    }

    return res
};