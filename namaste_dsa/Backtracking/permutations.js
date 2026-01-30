/**
 * Approach: Backtracking.
 * Intuitively, we build permutations by picking an element and then recursing for all
 * remaining available elements. We check if an element is already in the `path`
 * to ensure each element is used exactly once.
 */
var permute = function (arr) {
    let res = []

    let backtrack = (path) => {
        if (path.length === arr.length) {
            res.push([...path])
            return
        }
        for (let i = 0; i < arr.length; i++) {
            if(!path.includes(arr[i])){
                path.push(arr[i])
                backtrack(path)
                path.pop()
            }    
        }
    }

    backtrack([])
    return res
};