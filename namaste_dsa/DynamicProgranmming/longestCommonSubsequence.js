/**
 * Approach: Dynamic Programming (2D Memoization).
 * Intuitively, if characters at `i` and `j` match, they contribute 1 to the LCS
 * and we move both pointers. If they don't, we take the maximum result of
 * either skipping the current character in `s1` or skipping it in `s2`.
 */
var longestCommonSubsequence = function(s1, s2) {
    let n = s1.length
    let m = s2.length
    let dp = Array.from({length: n}, () => Array(m).fill(-1))

    let fn = (i, j) => {
        if(i < 0 || j < 0) return 0

        if(dp[i][j] !== -1 ){
            return dp[i][j] 
        }
        if(s1[i] === s2[j]){
            dp[i][j] = 1 + fn(i - 1, j - 1)
            return dp[i][j]
        }
        dp[i][j] = Math.max(fn( i - 1, j), fn(i, j - 1))
        return dp[i][j]
    }
    return fn(n - 1, m - 1)
};