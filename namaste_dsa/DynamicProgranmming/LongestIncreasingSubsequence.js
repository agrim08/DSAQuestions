var lengthOfLIS = function (arr) {
    let n = arr.length
    let dp = new Array(n).fill(1)
    dp[0] = 1
    let lisLength = 1

    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[j] < arr[i]) {
                dp[i] = Math.max(dp[i], dp[j] + 1)
                lisLength = Math.max(lisLength, dp[i])
            }
        }
    }
    return lisLength
};