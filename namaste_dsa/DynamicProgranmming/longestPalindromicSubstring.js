/**
 * Approach: Dynamic Programming (Expanding around center / 2D DP).
 * Intuitively, a string is a palindrome if its first and last characters match
 * and the inner substring is also a palindrome. we build up from 1-char and
 * 2-char palindromes to find the longest one.
 */
var longestPalindrome = function(s) {
    let n = s.length
    let dp = Array.from({length: n}, () => Array(n).fill(null))
    let ans = [0, 0]

    for(let i = 0; i < n; i++){
        dp[i][i] = true

        if(i < n - 1 && s[i] === s[i + 1]){
            dp[i][i + 1] = true
            ans = [i, i + 1]
        }
    }

    for(let len = 3; len <= n; len++){
        for(let i = 0; i <= n - len; i++){
            let j = i + len - 1
            if(s[i] === s[j] && dp[i + 1][j - 1]){
                dp[i][j] = true
                ans = [i, j]
            }
        }
    }

    return s.substring(ans[0], ans[1] + 1)
};