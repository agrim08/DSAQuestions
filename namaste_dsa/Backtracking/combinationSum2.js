/**
 * Approach: Backtracking with Sorting.
 * Intuitively, to avoid duplicates, we sort the array and skip identical adjacent elements
 * at the same recursion level. Each element can only be used once, so we move the start
 * index forward (`i + 1`) in each recursive call.
 */
var combinationSum2 = function(arr, target) {
    let res = []
    arr.sort((a, b) => (a - b))

    let backtrack = (path, start, rem) => {
        if(rem < 0){
            return
        }
        if(rem === 0){
            res.push([...path])
            return
        }

        for(let i = start; i < arr.length; i++){
            if(i > start && arr[i] === arr[i - 1]){
                continue
            }
            path.push(arr[i])
            backtrack(path, i + 1, rem - arr[i])
            path.pop()
        }
    }

    backtrack([], 0, target)
    return res
};