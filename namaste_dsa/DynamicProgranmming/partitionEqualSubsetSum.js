var canPartition = function(arr) {
    let sum = arr.reduce((acc, curr) => acc + curr, 0)
    if(sum % 2 != 0) return false
    sum /= 2

    let dp = Array.from({ length: sum + 1}, () => Array(arr.length).fill(undefined))

    let fn = (remS, start) => {
        if(remS === 0) return true
        if(remS < 0) return false

        if(dp[remS][start] != undefined) return dp[remS][start]
        
        for(let i = start; i < arr.length; i++){
            if(fn(remS - arr[i], i + 1)){
                return dp[remS][start] = true
            }
        }
        return dp[remS][start] = false
    }
    return fn(sum, 0)
};