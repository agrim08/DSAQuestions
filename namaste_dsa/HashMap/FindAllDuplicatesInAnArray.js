/**
 * Approach: Hash Map Frequency Tracking.
 * Intuitively, we use a hash map to keep track of the numbers we've seen so 
 * far. If we encounter a number that's already in the map, it means we've 
 * found a duplicate.
 */
var findDuplicates = function(nums) {
    let map = {}
    let res = []

    for(let num of nums){
        if(map[num]){
            res.push(num)
        }else{
            map[num] = 1
        }
    }

    return res
};