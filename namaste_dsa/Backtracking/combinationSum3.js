/**
 * Approach: Backtracking.
 * Intuitively, we explore combinations of `k` unique numbers from 1-9 that sum to `n`.
 * We use recursion to pick a number, subtract it from the target, and ensure we only
 * pick larger numbers later to avoid permutations.
 */
var combinationSum3 = function(k, n) {
    let res = []

    let backtrack = (rem, path, start) => {
        if(rem === 0 && path.length === k){
            res.push([...path])
            return
        }
        if(path.length === k) return
        for(let i = start; i <= 9; i++){
            path.push(i)
            backtrack(rem - i, path, i + 1)
            path.pop()
        }
    }

    backtrack(n, [], 1)
    return res
};