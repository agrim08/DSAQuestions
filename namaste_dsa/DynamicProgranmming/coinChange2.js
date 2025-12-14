var change = function(amount, coins) {
    let n = coins.length
    let dp = Array.from({length: amount + 1}, () => Array(n).fill(-1))

    let fn = (remAmount, start) => {
        if(remAmount === 0) return 1
        if(remAmount < 0) return 0
        if(dp[remAmount][start] != -1) return dp[remAmount][start]
        let ways = 0

        for(let i = start; i < n; i++){
            ways += fn(remAmount - coins[i], i)
        }
        return dp[remAmount][start] = ways
    }
    return fn(amount, 0)
};