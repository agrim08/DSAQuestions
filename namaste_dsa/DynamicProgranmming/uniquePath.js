var uniquePaths = function (m, n) {
    let dp = Array.from({ length: m }, () => Array(n).fill(-1))
    let fn = (x, y) => {
        if (x === 0 && y === 0) return 1
        if (x < 0 || y < 0) return 0

        if (dp[x][y] != -1) return dp[x][y]

        return dp[x][y] = fn(x - 1, y) + fn(x, y - 1)
    }
    return fn(m - 1, n - 1)
};