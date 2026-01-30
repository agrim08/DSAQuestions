/**
 * Approach: Monotonic Stack + Hashing.
 * Intuitively, we find the next greater element for every number in `nums2` 
 * using a monotonic stack. We store these mappings in a hash map for quick 
 * O(1) retrieval when processing `nums1`.
 */
//!Important leetcode 496
var nextGreaterElement = function(nums1, nums2) {
    let s = []
    let map = {}
    let n = nums2.length
    s.push(nums2[n - 1])
    map[nums2[n - 1]] = -1

    for(let i = n - 2; i >= 0; i--){
        while(s.length){
            if(nums2[i] > s[s.length - 1]){
                s.pop()
            }else{
                map[nums2[i]] = s[s.length - 1]
                break
            }
        }
        if(s.length === 0){ 
            map[nums2[i]] = -1
        }
        s.push(nums2[i])
    }

    return nums1.map(x => map[x])
};