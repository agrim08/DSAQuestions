/**
 * Approach: Vertical Character-by-Character Scanning.
 * Intuitively, we iterate through the characters of the first string and compare 
 * them with the corresponding characters of all other strings. The moment we 
 * find a mismatch or reach the end of any string, the current prefix is the answer.
 */
var longestCommonPrefix = function(s) {
    let x = 0

    if(s.length === 1) return s[0]

    while(x <= s[0].length){
        let ch = s[0][x]
        for(let i = 1; i < s.length; i++){
            if(ch != s[i][x]){
                return s[0].substring(0, x)
            }
        }
        ++x
    }
    return s[0]
};