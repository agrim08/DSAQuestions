/**
 * Approach: Dynamic Programming (Tabulation).
 * Intuitively, we build the answer for every amount from 1 up to the target.
 * For each amount, we check every coin; if the amount is reachable, we update it
 * as `1 + dp[amount - coin]`, keeping the overall minimum found.
 */
var coinChange = function(coins, amount) {
    let n = coins.length
    let dp = new Array(amount + 1).fill(Infinity)
    dp[0] = 0

    for(let rem = 1; rem <= amount; rem++){
        for(let coin of coins){
            let remAmount = rem - coin
            if(remAmount >= 0){
                dp[rem] = Math.min(dp[rem], 1 + dp[remAmount])
            }
        }
    }

    return dp[amount] === Infinity ? -1 : dp[amount]
};