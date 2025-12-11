var numDecodings = function(s) {
    let dp = {}

    let fn = (remS) => {
        let n = remS.length
        let ans = 0

        if(remS == '') return 1
        if(remS == '0') return 0

        if(remS in dp) return dp[remS]

        let oneDigit = remS.substring(n - 1)
        let twoDigit = remS.substring(n - 2)

        if(oneDigit != 0){
            ans += fn(remS.substring(0, n - 1))
        }

        if(twoDigit >= 10 && twoDigit <= 26){
            ans += fn(remS.substring(0, n - 2))
        }
        dp[remS] = ans
        return ans
    }
    return fn(s)
};