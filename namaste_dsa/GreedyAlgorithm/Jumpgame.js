var canJump = function(nums) {
    let maxJumps = 0

    for(let i = 0; i < nums.length; i++){
        if(i > maxJumps) return false

        maxJumps = Math.max(maxJumps, i + nums[i])
    }

    return true
};