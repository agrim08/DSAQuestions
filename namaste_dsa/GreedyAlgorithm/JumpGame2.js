var jump = function(nums) {
    const n = nums.length;
    if (n <= 1) return 0;

    let jumps = 0;
    let farthest = 0;
    let currEnd = 0;

    for (let i = 0; i < n - 1; i++) {
        farthest = Math.max(farthest, i + nums[i]);

        if (i === currEnd) {
            jumps++;
            currEnd = farthest;
        }
    }

    return jumps;
};