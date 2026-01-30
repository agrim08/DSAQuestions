/**
 * Approach: Linear Scan (Sliding Window).
 * Intuitively, we slide a window of size `m` (needle length) across the 
 * `haystack`. If the substring within the window matches the needle, 
 * we return the current starting index.
 */
var strStr = function(haystack, needle) {
    let n = haystack.length
    let m = needle.length

    for(let i = 0; i <= n -m; i++){
        for(j = 0; j < m; j++){
            if(haystack[i + j] !== needle[j]){
                break
            }
        }
        if(j == m){
            return i
        }
    }

    return -1
};