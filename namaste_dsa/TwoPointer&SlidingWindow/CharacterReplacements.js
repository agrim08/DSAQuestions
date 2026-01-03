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