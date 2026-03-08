var minCost = function(s, encCost, flatCost) {
    let n = s.length

    let pref = new Array(n + 1).fill(0)
    for(let i = 0; i < n; i++){
        pref[i + 1] = pref[i] + (s[i] === '1')
    }

    function Ones(length){
        return pref[r + 1] - pref[l]
    }

    let memo = new Map()

    let dfs = (l, r) => {
        const key = l + "_" + r
        if(memo.has(key)) return memo.get(key)

        let len = r - l + 1
        let oneCount = Ones(l, r)

        let base = oneCount === 0 ? flatCost : len * oneCount * encCost

        let ans = base

        if(len % 2 === 0){
            let mid = Math.floor((l + r) / 2)
            ans = Math.min(ans, dfs(l, mid) + dfs(mid + 1, r))
        }

        memo.set(key, ans)
        return ans
    }

    return dfs(0, n - 1)
}