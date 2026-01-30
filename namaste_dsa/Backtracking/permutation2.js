/**
 * Approach: Backtracking with Sorting.
 * Intuitively, to handle duplicate elements, we sort them first. During recursion,
 * if the current element is the same as the previous one in the same level,
 * we skip it to prevent identical permuted sequences.
 */
var permuteUnique = function(arr) {
    arr.sort((a, b) => (a - b))
    let res = []

    let backtrack = (path, choices) => {
        if (path.length === arr.length) {
            res.push([...path])
            return
        }
        for (let i = 0; i < choices.length; i++) {
            if(i > 0 && choices[i] === choices[i - 1]){
                continue
            }
            path.push(choices[i])
            backtrack(path, [...choices.slice(0, i), ...choices.slice(i + 1)])
            path.pop()    
        }
    }

    backtrack([], arr)
    return res
};