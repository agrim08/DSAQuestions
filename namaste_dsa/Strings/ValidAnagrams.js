/**
 * Approach: Frequency Counting (Hash Map).
 * Intuitively, two strings are anagrams if they have the same character counts. 
 * we count character frequencies in the first string and decrement them for 
 * the second; if all counts end up at zero, they are anagrams.
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false

    let map = {}

    for(let i = 0; i < s.length; i++){
        if(!map[s[i]]){
            map[s[i]] = 1
        }else{
            map[s[i]]++
        }
    }

    for(let i = 0; i < t.length; i++){
        if(!map[t[i]] || map[t[i]] < 0){
            return false
        }else{
            --map[t[i]]
        }
    }

    return true
};