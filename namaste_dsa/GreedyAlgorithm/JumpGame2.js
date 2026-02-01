var jump = function(nums) {
    const n = nums.length;
    if (n <= 1) return 0;

    let jumps = 0;
    let coverage = 0;
    let lastJump = 0;

    for (let i = 0; i < n - 1; i++) {
        coverage = Math.max(coverage, i + nums[i]);

        if (i === lastJump) {
            jumps++;
            lastJump = coverage;
        }
    }

    return jumps;
};