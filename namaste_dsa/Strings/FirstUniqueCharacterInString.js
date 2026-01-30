/**
 * Approach: Two-Pass Frequency Mapping.
 * Intuitively, we first count occurrences of every character. In the second 
 * pass, we return the index of the first character that appeared exactly 
 * once in our frequency map.
 */
var firstUniqChar = function(s) {
    let map = {}

    for(let i = 0; i < s.length; i++){
        map[s[i]] = ( map[s[i]] || 0) + 1
    }

    for(let i = 0; i < s.length; i++){
        if(map[s[i]] === 1) return i
    }

    return -1
};