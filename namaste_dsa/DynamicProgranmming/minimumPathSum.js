/**
 * Approach: Dynamic Programming (2D Memoization).
 * Intuitively, to reach a cell `(x, y)` with minimum cost, you must come from
 * either the cell above or the cell to the left. We take the minimum of those
 * two and add the current cell's value.
 */
var minPathSum = function(arr) {
    if (!arr.length || !arr[0].length) return 0

    let m = arr[0].length
    let n = arr.length
    let dp = Array.from({ length: n }, () => Array(m).fill(-1))

    let fn = (x, y) => {
        if(x === 0 && y === 0) return arr[0][0]
        if(x < 0 || y < 0) return Infinity

        if (dp[x][y] != -1) return dp[x][y]

        let up = fn(x - 1, y) + arr[x][y]
        let left = fn(x, y - 1) + arr[x][y]

        return dp[x][y] = Math.min(up, left)
    }

    return fn(n - 1, m - 1)
};