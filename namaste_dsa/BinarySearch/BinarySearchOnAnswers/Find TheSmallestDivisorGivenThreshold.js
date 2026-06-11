// Approach: Binary Search on Answer (Find Smallest Divisor).
// The search space ranges from 1 to the maximum element in the array.
// For a candidate divisor, we calculate the sum of division results rounded up.
// If the sum is within the threshold, we search the left half to minimize the divisor.
// Otherwise, the divisor is too small, so we search for a larger divisor in the right half.
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