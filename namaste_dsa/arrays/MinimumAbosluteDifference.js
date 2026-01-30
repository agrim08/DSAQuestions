/**
 * Approach: Sorting with Adjacent Comparison.
 * Intuitively, the smallest difference between any two numbers must occur 
 * between adjacent elements in a sorted array. We sort the array first, 
 * find the minimum difference, and collect all pairs that match it.
 */
var minimumAbsDifference = function(arr) {
    arr.sort((a, b) => a - b);
    let minDiff = Infinity
    let ans = []

    for(let i = 0; i < arr.length - 1; i++){
        let currDiff = arr[i + 1] - arr[i]

        if(currDiff < minDiff){
            minDiff = currDiff
            ans = [[arr[i], arr[i + 1]]]
        }
        else if(currDiff === minDiff){
            ans.push([arr[i], arr[i + 1]])
        }
    }

    return ans
};