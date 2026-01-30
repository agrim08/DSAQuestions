/**
 * Approach: Backtracking / DFS.
 * Intuitively, we map each digit to its possible letters and explore all paths.
 * For each digit, we try every possible letter, recurse to the next digit,
 * and then backtrack to build the next combination.
 */
var letterCombinations = function(digits) {
    if(!digits.length) return []
    const letters = {
        2 : "abc",
        3 : "def",
        4 : "ghi",
        5 : "jkl",
        6 : "mno",
        7 : "pqrs",
        8 : "tuv",
        9 : "wxyz"
    }

    let res = []

    let backtrack = (path, index) => {
        if(index === digits.length){
            res.push(path.join(""))
            return
        }

        let choices = letters[digits[index]]

        for(let i = 0; i < choices.length; i++){
            path.push(choices[i])
            backtrack(path, index + 1)
            path.pop()
        }
    }

    backtrack([], 0)
    return res
};