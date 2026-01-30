/**
 * Approach: Backtracking.
 * Intuitively, we build the string by adding '(' if we have any left, and adding ')'
 * only if there are more '(' already in the string. This ensures the parentheses
 * remain well-formed as we explore all valid combinations.
 */
var generateParenthesis = function(n) {
    let ans = []

    let backtrack = (curr, open, close) => {
        if(curr.length == 2 * n ){
            ans.push(curr)
            return
        }

        if(open < n){
            backtrack(curr + "(", open + 1, close)
        }

        if(close < open){
            backtrack(curr + ")", open, close + 1)
        }
    }

    backtrack("", 0, 0)
    return ans
};