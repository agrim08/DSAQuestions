/**
 * Approach: Dynamic Programming (Memoization).
 * Intuitively, a string can be broken into words if some prefix is in the
 * dictionary AND the remaining suffix can also be broken. We recursively
 * try all possible prefixes and cache the results for each substring suffix.
 */
var wordBreak = function(s, wordDict) {
    let set = new Set(wordDict) 
    let dp = {}

    let canBreak = (remS) => {
        if(remS === '') return true
        if(remS in dp) return dp[remS]

        let n = remS.length
        for(let i = 1; i <= n; i++){
            let prefix = remS.substring(0, i)
            if(set.has(prefix) && canBreak(remS.substring(i))){
                return dp[remS] = true
            }
        }

        return dp[remS] = false
    }

    return canBreak(s)
};