function printLCS(s1, s2) {
    let n = s1.length
    let m = s2.length
    let dp = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0))

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
            if (s1[i - 1] === s2[j - 1]) {
                dp[i][j] = 1 + dp[i - 1][j - 1]
            }
            else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
            }
        }
    }

    let i = n, j = m
    let ans = []

    while (i > 0 && j > 0) {
        if (s1[i - 1] === s2[j - 1]) {
            ans.push(s1[i - 1])
            i--
            j--
        }
        else {
            if (dp[i - 1][j] > dp[i][j - 1]) {
                i--
            }
            else {
                j--
            }
        }
    }

    return ans.reverse().join("")
}

console.log(printLCS("AGGTAB", "GXTXAYB"));