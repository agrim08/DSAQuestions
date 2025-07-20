var missingNumber = function(nums) {
    n = nums.length
    sum = 0
    sumActual = (n*(n + 1)) / 2

    for(let i = 0; i < nums.length; i++){
        sum = sum + nums[i]
    }

    return sumActual - sum
};