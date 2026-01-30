var subarraySum = function(nums, k) {
    let map = new Map()
    map.set(0, 1)
    let count = 0
    let preSum = 0

    for(let i = 0; i < nums.length; i++){
        preSum += nums[i]
        let rem = preSum - k

        if (map.has(rem)) {
            count += map.get(rem);
        }

        map.set(preSum, (map.get(preSum) || 0) + 1);
    }

    return count
};