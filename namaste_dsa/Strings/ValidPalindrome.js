/**
 * Approach: Two-Pointer Comparison.
 * Intuitively, a palindrome reads the same forwards and backwards. We first 
 * normalize the string (remove non-alphanumeric and lowercase) and then use 
 * two pointers moving from the ends towards the center to check for equality.
 */
var isPalindrome = function(s) {
    s = s.replace(/[^a-z0-9]/gi, '').toLowerCase();

    let l = 0
    let r = s.length - 1

    while(l < r){
        if(s[l] != s[r]) return false

        l++
        r--
    }

    return true
};