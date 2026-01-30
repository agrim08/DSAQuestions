/**
 * Approach: Hash Set Lookup.
 * Intuitively, we store all jewel types in a Set for O(1) lookup. Then we 
 * iterate through our stones and count how many of them are present in the 
 * jewel set.
 */
var numJewelsInStones = function(jewels, stones) {
    let s = new Set()  
    for(let i = 0; i < jewels.length; i++){
        s.add(jewels[i])
    }

    let count = 0
    for(let i = 0; i < stones.length; i++){
        if(s.has(stones[i])){
            count++
        }
    }

    return count
};