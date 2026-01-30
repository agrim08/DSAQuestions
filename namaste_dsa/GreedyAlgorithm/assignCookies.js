/**
 * Approach: Greedy with Two Pointers.
 * Intuitively, we sort both greed factors and cookie sizes. We try to satisfy 
 * the child with the smallest greed factor using the smallest available 
 * cookie that is sufficient, maximizing the number of content children.
 */
var findContentChildren = function(g, s) {
    g.sort((a, b) => (a - b))
    s.sort((a, b) => (a - b))

    let i = 0
    let j = 0

    while(i <= s.length){
        if(s[i] >= g[j]){
            j++
        }

        i++
    }

    return j
};