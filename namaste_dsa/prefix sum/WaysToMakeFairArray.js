var waysToMakeFair = function (nums) {
    let n = nums.length

    let preEven = new Array(n + 1).fill(0)
    let preOdd = new Array(n + 1).fill(0)

    for (let i = 0; i < n; i++) {
        preEven[i + 1] = preEven[i]
        preOdd[i + 1] = preOdd[i]

        if (i % 2 === 1) preOdd[i + 1] += nums[i]
        else {
            preEven[i + 1] += nums[i]
        }
    }

    let count = 0
    for (let i = 0; i < n; i++) {
        let evenBefore = preEven[i];
        let oddBefore = preOdd[i];

        // elements after i flip parity
        let evenAfter = preOdd[n] - preOdd[i + 1];
        let oddAfter = preEven[n] - preEven[i + 1];

        let evenSum = evenBefore + evenAfter;
        let oddSum = oddBefore + oddAfter;

        if (evenSum === oddSum) count++;
    }

    return count
};