/**
 * Approach: Sliding Window + Hash Map.
 * Intuitively, we maintain a window of unique characters. When we see a 
 * repeat, we jump the left pointer `i` past the last occurrence of that 
 * character to ensure the window remains unique.
 */
var lengthOfLongestSubstring = function(s) {
    let i = j = 0
    let map = {}
    let maxWS = 0

    for(j = 0; j < s.length; j++){
        if(map[s[j]] != undefined && map[s[j]] >= i){
            i = map[s[j]] + 1
        }

        map[s[j]] = j
        let curr = j - i + 1
        maxWS = Math.max(maxWS, curr)
    }

    return maxWS
};