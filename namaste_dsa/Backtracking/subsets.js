/**
 * Approach: Backtracking.
 * Intuitively, we build all possible subsets (the power set) by either including
 * or excluding each element. At each step, the current path represents a valid
 * subset, which we add to our results before recursing further.
 */
var subsets = function(arr) {
    let res = []
    let backtrack = (path, start) => {
        res.push([...path])
        for(let i = start; i < arr.length; i++){
            path.push(arr[i])
            backtrack(path, i + 1)
            path.pop()
        }
    }
    backtrack([], 0)
    return res
};