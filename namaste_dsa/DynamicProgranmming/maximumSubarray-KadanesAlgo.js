/**
 * Approach: Kadane's Algorithm.
 * Intuitively, we iterate through the array, at each step deciding to either
 * start a new subarray or extend the current one. If the current sum becomes
 * less than the current element, we start fresh from that element.
 */
var maxSubArray = function(arr) {
    let maxSum = arr[0]
    let currSum = arr[0]

    for(let i = 1; i < arr.length; i++){
        currSum = Math.max(currSum + arr[i], arr[i])
        maxSum = Math.max(currSum, maxSum)
    }

    return maxSum
};