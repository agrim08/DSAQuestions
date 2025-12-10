var rob = function(arr) {
    let n = arr.length
    let dp = [arr[0], Math.max(arr[0], arr[1])]

    for(let i = 2; i < n; i++){
        dp[i] = Math.max(arr[i] + dp[i - 2], dp[i - 1])
    }

    return dp[n - 1]
};