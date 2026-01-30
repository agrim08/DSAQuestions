/**
 * Approach: Dynamic Programming (Minimum of Neighbors).
 * Intuitively, for a cell to be the bottom-right of a square of size `S`, its
 * top, left, and top-left neighbors must all be the bottom-right of squares
 * of size at least `S-1`. We take the minimum of these and add 1.
 */
var maximalSquare = function(matrix) {
    let rows = matrix.length
    let cols = matrix[0].length
    let maxL = 0
    let dp = {}

    let fn = (x, y) => {
        if(x >= rows || y >= cols){
            return 0
        }
        let key = x + "," + y;

        if(dp[key] != undefined) return dp[key]

        let down = fn(x + 1, y)
        let up = fn(x, y + 1)
        let diag = fn(x + 1, y + 1)

        dp[key] = 0
        if(matrix[x][y] === "1"){
            dp[key] = 1 + Math.min(down, up, diag)
        }
        return dp[key]
    }
    fn(0, 0)

    for(let key in dp){
        maxL = Math.max(maxL, dp[key])
    }
    return maxL * maxL
};