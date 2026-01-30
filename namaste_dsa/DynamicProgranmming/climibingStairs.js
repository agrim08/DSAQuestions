/**
 * Approach: Dynamic Programming (Fibonacci pattern).
 * Intuitively, to reach step `n`, you must arrive from either step `n-1` (1-step jump)
 * or step `n-2` (2-step jump). Thus, the number of ways to reach step `n` is
 * the sum of ways to reach the two previous steps.
 */
var climbStairs = function(n) {
    let dp = [0, 1, 2]

    for(let i = 3; i <= n; i++){
        dp[i] = dp[i - 2] + dp[i - 1]
    }

    return dp[n]
};