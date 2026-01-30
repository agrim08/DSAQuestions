/**
 * Approach: Binary Search on Answer.
 * Intuitively, the sum of division results is inversely proportional to the divisor (monotonic).
 * We search for the smallest divisor in the range [1, max(nums)]. If a divisor works (sum <= threshold),
 * we ignore the right half to minimize it further; otherwise, we search the right half for a valid divisor.
 */
var smallestDivisor = function(nums, threshold) {
    let low = 1
    let high = maxOfArray(nums)

    while(low <= high){
        let mid = low + Math.floor((high - low) / 2);

        if(calcSum(nums, mid) <= threshold){
            high = mid - 1
        }else{
            low = mid + 1
        }
    }
    return low
};

const maxOfArray = (arr) => {
    return Math.max(...arr);
}

const calcSum = (arr, x) => {
    let sum = 0
    for(let i = 0; i < arr.length; i++){
        sum += Math.ceil(arr[i]/x)
    }

    return sum
}