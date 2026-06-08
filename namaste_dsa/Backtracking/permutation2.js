/**
 * Approach: Backtracking with Sorting and Skipping.
 * To handle duplicates, we sort the array first. During recursion,
 * if the current element is the same as the previous one and we haven't
 * processed the previous one (i > 0 && choices[i] === choices[i-1]),
 * we skip it to avoid generating identical permutations.
 */
var permuteUnique = function (arr) {
    arr.sort((a, b) => (a - b))
    let res = []

    let backtrack = (path, choices) => {
        if (path.length === arr.length) {
            res.push([...path])
            return
        }
        for (let i = 0; i < choices.length; i++) {
            if (i > 0 && choices[i] === choices[i - 1]) {
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