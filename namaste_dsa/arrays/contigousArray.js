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