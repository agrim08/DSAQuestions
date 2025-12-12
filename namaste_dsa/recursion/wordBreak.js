var wordBreak = function(s, wordDict) {
    let set = new Set(wordDict) 

    let canBreak = (remS) => {
        if(remS === '') return true
        let n = remS.length
        for(let i = 1; i <= n; i++){
            let prefix = remS.substring(0, i)
            if(set.has(prefix) && canBreak(remS.substring(i))){
                return true
            }
        }

        return false
    }

    return canBreak(s)
};

//!this will give TLE for large inputs due to overlapping subproblems, optimization using DP