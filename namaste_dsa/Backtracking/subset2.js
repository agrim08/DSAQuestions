//this will fail if array is not sorted, [2,1] → "2,1", [1,2] → "1,2"

/**
 * Approach: Backtracking with Sorting.
 * Intuitively, we generate all subsets of an array that may contain duplicates.
 * By sorting the array and skipping identical elements at the same recursion level,
 * we ensure each unique combination is added only once.
 */
var subsetsWithDup = function(arr) {
    let res = []
    let used = new Set()
    let backtrack = (path, start) => {
        let key = path.join(',')

        if(!used.has(key)){
            used.add(key)
            res.push([...path])
        }

        for(let i = start; i < arr.length; i++){
            path.push(arr[i])
            backtrack(path, i + 1)
            path.pop()
        }
    }
    backtrack([], 0)
    return res
};

//optimized approach without using extra space for set
var subsetsWithDup = function(arr) {
    let res = []
    arr.sort((a,b) => a - b)
    let backtrack = (path, start) => {
        res.push([...path])

        for(let i = start; i < arr.length; i++){
            if(i > start && arr[i] === arr[i - 1]) continue;
            path.push(arr[i])
            backtrack(path, i + 1)
            path.pop()
        }
    }
    backtrack([], 0)
    return res
};