/**
 * Approach: Dynamic Programming.
 * Intuitively, at each house, you have two choices: rob it (which means skipping
 * the previous house) or skip it (taking the maximum amount robbed up to the
 * previous house). We track the maximum running total to ensure no two adjacent houses are robbed.
 */
//O(n) space
var rob = function(arr) {
    let n = arr.length
    let dp = [arr[0], Math.max(arr[0], arr[1])]

    for(let i = 2; i < n; i++){
        dp[i] = Math.max(arr[i] + dp[i - 2], dp[i - 1])
    }

    return dp[n - 1]
};

//O(1) space optimization
var rob = function(arr) {
    let n = arr.length
    let prev1 = arr[0]
    let prev2 = Math.max(arr[0], arr[1])

    for(let i = 2; i < n; i++){
        let curr = Math.max(arr[i] + prev1, prev2)
        prev1 = prev2
        prev2 = curr
    }   
    return prev2
}