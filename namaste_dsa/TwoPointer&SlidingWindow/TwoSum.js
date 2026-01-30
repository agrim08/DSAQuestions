/**
 * Approach: Hash Map (Complement Lookup).
 * Intuitively, for each number `x`, we check if its complement `target - x` 
 * has already been seen. Storing seen numbers in a map allows us to find 
 * the pair in a single pass with O(1) lookup time.
 */
//Approach 1
var twoSum = function(nums, target) {
    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++){
            if(nums[i] + nums[j] === target){
                return [i, j]
            }
        }
    }
}

//Approach 2
var twoSumOptimized = function(nums, target) {
    let s = new Set()

    for(let i = 0; i < nums.length; i++){
        s[nums[i]] = i
    }

    for(let i = 0; i < nums.length; i++){
        let pair = target - nums[i]
        if(s[pair] && s[pair] !== i){
            return [i, s[pair]]
        }
    }
};