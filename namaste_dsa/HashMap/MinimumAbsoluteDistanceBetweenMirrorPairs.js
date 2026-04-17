var minMirrorPairDistance = function (nums) {
    // Map stores: value needed to form a mirror -> most recent index
    const lastSeen = new Map();
    let minDistance = Infinity;

    // Helper function to reverse digits of a number
    const getReverse = (num) => {
        let rev = 0;
        while (num > 0) {
            rev = rev * 10 + (num % 10);
            num = Math.floor(num / 10);
        }
        return rev;
    };

    for (let i = 0; i < nums.length; i++) {
        const current = nums[i];

        // 1. Check if the current number is a mirror of something we saw before
        if (lastSeen.has(current)) {
            const distance = i - lastSeen.get(current);
            minDistance = Math.min(minDistance, distance);
        }

        // 2. Map the REVERSE of the current number to the current index.
        // If we see this reverse value later, we've found a mirror pair.
        lastSeen.set(getReverse(current), i);
    }

    return minDistance === Infinity ? -1 : minDistance;
};