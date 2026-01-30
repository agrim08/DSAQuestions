/**
 * Approach: Dynamic Programming.
 * Intuitively, we track the longest increasing subsequence ending at each index `i`.
 * For every previous index `j < i`, if `arr[j] < arr[i]`, we can potentially extend the
 * sequence ending at `j` by including `arr[i]`, updating `dp[i]` to the maximum possible length.
 */
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