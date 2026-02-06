var minRemoval = function(nums, k) {
    nums.sort((a, b) => a - b);

    let n = nums.length;
    let maxLen = 1;
    let r = 0;

    for (let l = 0; l < n; l++) {
        while (r < n && nums[r] <= nums[l] * k) {
            r++;
        }
        maxLen = Math.max(maxLen, r - l);
    }

    return n - maxLen;
};