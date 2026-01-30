/**
 * Approach: Backtracking.
 * Intuitively, we generate all sets of `k` numbers from `1` to `n`. In each step,
 * we choose a number and recurse for the remaining spots, using a `start` index
 * to ensure we only look forward and avoid duplicates.
 */
var combine = function(n, k) {
    let res = []

    let backtrack = (path, start) => {
        if(path.length === k) {
            res.push([...path])
            return
        }
        for(let i = start; i <= n; i++){
            path.push(i)
            backtrack(path, i + 1)
            path.pop()
        }
    }

    backtrack([], 1)
    return res
};