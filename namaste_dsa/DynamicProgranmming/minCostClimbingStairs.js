/**
 * Approach: Dynamic Programming.
 * Intuitively, the cost to reach step `i` is the current step's cost plus the
 * minimum cost to reach either of the two previous steps. We build this total
 * sequentially to find the minimum cost to reach the top.
 */
var minCostClimbingStairs = function (cost) {
    let n = cost.length
    let dp = [0, 0]

    for (let i = 2; i <= n; i++) {
        dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2])
    }

    return dp[n]
};