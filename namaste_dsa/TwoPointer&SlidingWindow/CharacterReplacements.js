/**
 * Approach: Sliding Window + Frequency Table.
 * Intuitively, we maintain a window and track the most frequent character.
 * The window is 'valid' if the number of other characters to be replaced 
 * is <= `k`. If it's invalid, we shrink the window from the left.
 */
var characterReplacement = function(s, k) {
    let map = {}
    let maxF = 0
    let left = 0
    let ans = 0

    for(let r = 0; r < s.length; r++){
        let char = s[r]
        map[char] = (map[char] || 0) + 1

        maxF = Math.max(map[char], maxF)

        while((r - left + 1) - maxF > k){
            map[s[left]]--
            left++
        }
        ans = Math.max(ans, r - left + 1)
    }

    return ans
};