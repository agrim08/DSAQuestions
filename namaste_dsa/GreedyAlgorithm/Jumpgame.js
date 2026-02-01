/**
 * Approach: Greedy Max-Reach Tracking.
 * Intuitively, we maintain the farthest index we can reach so far. 
 * At each position, if we can't reach it (i > maxJumps), we return false.
 * Otherwise, we update the max reachable position as max(current max, i + nums[i]).
 * If we complete the loop, we can reach the end.
 */
var canJump = function(nums) {
    let maxJumps = 0

    for(let i = 0; i < nums.length; i++){
        if(i > maxJumps) return false

        maxJumps = Math.max(maxJumps, i + nums[i])
    }

    return true
};