function countFairPairs(nums, upper, lower){
    nums.sort((a, b) => a - b)

    function solve(limit){
        let left = 0
        let right = nums.length - 1
        let count = 0

        while(left < right){
            if(nums[left] + nums[right] <= limit){
                count += right - left
                left++
            }else{
                right--
            }
        }
        return count
    }

    return solve(upper) - solve(lower - 1)
}