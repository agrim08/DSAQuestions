/**
 * Approach: Hash Set Lookup.
 * Intuitively, we store elements of the first array in a Set for O(1) lookups.
 * Then we iterate through the second array, keeping only those elements 
 * present in the set and ensuring uniqueness by using another set for results.
 */
var intersection = function(nums1, nums2) {
    let s = new Set()
    let ans = new Set()
    for(let i = 0; i < nums1.length; i++){
        s.add(nums1[i])
    }

    for(let j = 0; j < nums2.length; j++){
        if(s.has(nums2[j])){
            ans.add(nums2[j])
        }
    }

    return Array.from(ans)
};