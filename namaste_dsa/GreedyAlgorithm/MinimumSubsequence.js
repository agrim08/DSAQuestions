/**
 * Approach: Greedy with Sorting.
 * Intuitively, we sort the array in descending order and greedily pick the 
 * largest numbers until their sum exceeds the sum of the remaining elements. 
 * this ensures we use the minimum number of elements.
 */
var minSubsequence = function(arr) {
    arr.sort((a, b) => b - a)

    let totalSum = arr.reduce((a, b) => a + b, 0)
    let res = []
    let currSum = 0

    for(let num of arr){
        currSum += num
        res.push(num)
        if(currSum > totalSum - currSum){
            break
        }
    }

    return res
};