/**
 * Approach: Step-wise Reversal (Jump by 2k).
 * Intuitively, we process the string in blocks of size `2k`. For each block, 
 * we reverse only the first `k` characters using a two-pointer approach, 
 * while leaving the next `k` characters as they are.
 */
var reverseStr = function(s, k) {
    s = s.split("")
    
    for(let x = 0; x < s.length; x += (2*k)){
        let mid = Math.floor(k/2)
            for(let i = 0; i < mid; i++){
                let temp = s[x + i]
                s[i + x] = s[x + k - i - 1]
                s[x + k - i - 1] = temp
            }
    }

    return s.join("")
};