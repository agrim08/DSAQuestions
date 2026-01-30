/**
 * Approach: Right-to-Left Traversal.
 * Intuitively, any number is odd if its last digit is odd. We look for the 
 * rightmost odd digit in the string; everything from the beginning up to 
 * that digit forms the largest possible odd substring.
 */
var largestOddNumber = function(num) {
    let end = -1

    for(let i = num.length - 1; i >= 0; i--){
        if(Number(num[i]) % 2 === 1){
            end = i
            break
        }
    }

    if(end === -1) return ""

    res = ""
    for(let i = 0; i <= end; i++){
        res += num[i]
    }

    return res
};