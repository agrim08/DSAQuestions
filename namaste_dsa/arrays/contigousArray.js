/**
 * Approach: Prefix Sum with Hash Map (Relative Frequency).
 * Intuitively, we treat `0` as `-1` and `1` as `+1`. If a prefix sum 
 * repeats at two different indices, the subarray between them must 
 * have sum `0`, meaning it contains an equal number of 0s and 1s.
 */
var findMaxLength = function(arr) {
    let store = {};
    let count = 0;
    let maxLen = 0;

    // base case: count 0 seen at index -1
    store[0] = -1;

    for (let i = 0; i < arr.length; i++) {
        count += (arr[i] === 1) ? 1 : -1;

        if (store[count] !== undefined) {
            maxLen = Math.max(maxLen, i - store[count]);
        } else {
            // store first occurrence only
            store[count] = i;
        }
    }

    return maxLen;
};