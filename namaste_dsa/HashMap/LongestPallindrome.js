/**
 * Approach: Frequency Counting (Greedy).
 * Intuitively, to form the longest palindrome, we use all even-count characters 
 * and `count - 1` for odd-count characters. If any character had an odd count, 
 * we can place exactly one such character in the center to increase the length.
 */
var longestPalindrome = function(s) {
    const charCount = {}

    for(let i = 0; i < s.length; i++){
        if(!charCount[s[i]]){
            charCount[s[i]] = 0
        }
        charCount[s[i]]++
    }

    let length = 0
    let isOdd = false

    for(let count of Object.values(charCount)){
        if(count % 2 == 0){
            length += count
        }else{
            length += count - 1
            isOdd = true
        }
    }

    if(isOdd){
        length += 1
    }

    return length
};