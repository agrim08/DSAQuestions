/**
 * Approach: Longest Prefix Suffix (LPS) Preprocessing.
 * Intuitively, KMP avoids redundant comparisons by using information 
 * about the pattern itself. We pre-calculate an LPS array to know how 
 * much of the pattern can be skipped when a mismatch occurs.
 */
//* KMP Algorithm to find the first occurrence of needle in haystack
var strStr = function(haystack, needle) {
    let m = haystack.length
    let n = needle.length
    //* Edge case: if needle is an empty string
    if(n == 0) return 0
    let lps = []
    lps[0] = 0

    let i = 0
    let j = 1
    //*build lps array
    while(j < n){
        if(needle[i] == needle[j]){
            lps[j] = i + 1
            i++
            j++
        }else{
            if(i == 0){
                lps[j] = 0
                ++j
            }else{
                //* backtrack i using lps array
                i = lps[i - 1]
            }
        }
    }
    //* search for needle in haystack using lps array
    i = 0
    j = 0
    while(i < m){
        if(haystack[i] === needle[j]){
            i++
            j++
        }else{
            if(j == 0){
                i++
            }else{
                j = lps[j - 1]
            }
        }
        //* check if we have found the needle
        if(j == n){
            return i - n
        }
    }
    return -1
};