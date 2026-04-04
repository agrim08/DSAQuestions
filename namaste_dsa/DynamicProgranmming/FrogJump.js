function frogJump(n, arr) {
    let dp = new Array(n).fill(-1)
    function f(i) {
        if (i === 0) return 0
        if (dp[i] !== -1) return dp[i]

        let one = f(i - 1) + Math.abs(arr[i] - arr[i - 1])
        let double = Infinity
        if(i > 1) double = f(i - 2) + Math.abs(arr[i] - arr[i - 2])

        return dp[i] = Math.min(one, double)
    }
    return f(n - 1)
}

//tabulation
function frogJumpTab(n, arr) {
    let dp = new Array(n).fill(-1)
    dp[0] = 0
    for(let i = 1; i < n; i++) {
        let one = dp[i - 1] + Math.abs(arr[i] - arr[i - 1])
        let double = Infinity
        if(i > 1) double = dp[i - 2] + Math.abs(arr[i] - arr[i - 2])
        dp[i] = Math.min(one, double)
    }
    return dp[n - 1]
}

//space optimized
function frogJumpSpaceOptimized(n, arr) {
    let prev2 = 0
    let prev1 = 0
    for(let i = 1; i < n; i++) {
        let one = prev1 + Math.abs(arr[i] - arr[i - 1])
        let double = Infinity
        if(i > 1) double = prev2 + Math.abs(arr[i] - arr[i - 2])
        let current = Math.min(one, double)
        prev2 = prev1
        prev1 = current
    }
    return prev1
}