var minCost = function (n, cuts) {
    let dp = {}
    let dfs = (start, end) => {
        if (start >= end) return 0

        let key = start + "_" + end
        if(dp[key] != undefined) return dp[key]

        let minCost = Infinity
        for (let c of cuts) {
            if (c > start && c < end) {
                let currCost = (end - start) + dfs(start, c) + dfs(c, end)
                minCost = Math.min(minCost, currCost)
            }
        }
        minCost = minCost == Infinity ? 0 : minCost
        dp[key] = minCost

        return minCost
    }

    return dfs(0, n)
};