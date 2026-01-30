/**
 * Approach: Backtracking.
 * Intuitively, we split the string at every possible index. If the prefix is a palindrome,
 * we recurse on the remaining suffix. If we reach the end of the string, the gathered
 * parts form a valid palindrome partition.
 */
var partition = function (s) {
    let res = []

    let backtrack = (path, remainingString) => {
        if(!remainingString.length){
            res.push([...path])
            return
        }

        for (let i = 1; i <= remainingString.length; i++) {
            let choice = remainingString.substring(0, i)

            if (!isPalindrome(choice)) continue;
            path.push(choice)
            backtrack(path, remainingString.substring(i))
            path.pop()
        }
    }

    backtrack([], s)
    return res
};

let isPalindrome = (s) => {
    let i = 0;
    let j = s.length - 1

    while(i < j){
        if(s[i] != s[j]) return false
        i++
        j--
    }

    return true
}