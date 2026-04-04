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