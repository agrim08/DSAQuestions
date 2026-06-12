var canPartition = function (arr) {
    let n = arr.length
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    if (sum % 2 != 0) return false
    sum /= 2

    let dp = Array.from({ length: n }, () => Array(sum + 1))

    function helper(index, currSum) {
        if (currSum === 0) return true
        if (index < 0 || currSum < 0) return false

        if (dp[index][currSum] !== undefined) return dp[index][currSum]

        let include = false
        if (arr[index] <= currSum) {
            include = helper(index - 1, currSum - arr[index])
        }
        let exclude = helper(index - 1, currSum)

        dp[index][currSum] = include || exclude
        return dp[index][currSum]
    }

    return helper(n - 1, sum)
};
