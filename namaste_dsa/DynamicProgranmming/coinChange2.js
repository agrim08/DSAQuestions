/**
 * Approach: Dynamic Programming (Memoization).
 * Intuitively, we find total combinations by iterating through each coin.
 * For each coin, we decide how many times to include it, reducing the target
 * amount each time and caching the results to avoid redundant calculations.
 */


//best approach
var change = function (amount, coins) {
    let n = coins.length
    let dp = Array.from({ length: n }, () => Array(amount + 1).fill(-1))

    let helper = (index, currAmount) => {
        if (index < 0 || currAmount < 0) return 0
        if (currAmount === 0) return 1

        if (dp[index][currAmount] !== -1) return dp[index][currAmount]

        let take = helper(index, currAmount - coins[index])
        let notTake = helper(index - 1, currAmount)

        return dp[index][currAmount] = take + notTake
    }

    return helper(n - 1, amount)
};


var change = function (amount, coins) {
    let n = coins.length
    let dp = Array.from({ length: amount + 1 }, () => Array(n).fill(-1))

    let fn = (remAmount, start) => {
        if (remAmount === 0) return 1
        if (remAmount < 0) return 0
        if (dp[remAmount][start] != -1) return dp[remAmount][start]
        let ways = 0

        for (let i = start; i < n; i++) {
            ways += fn(remAmount - coins[i], i)
        }
        return dp[remAmount][start] = ways
    }
    return fn(amount, 0)
};