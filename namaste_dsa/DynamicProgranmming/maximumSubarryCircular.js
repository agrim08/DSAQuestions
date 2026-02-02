/**
 * Approach: Kadane's Algorithm.
 * 1. Calculate the maximum subarray sum using standard Kadane's algorithm for the non-circular case.
 * 2. Calculate the minimum subarray sum and total sum to find the maximum circular subarray sum (total - min).
 * 3. Return the maximum of the non-circular and circular sums, handling the edge case where all elements are negative.
 */
var maxSubarraySumCircular = function(arr) {
    let globalMax = arr[0]
        let globalMin = arr[0]
        let currMax = 0
        let currMin = 0
        let total = 0
        
        for(let n of arr){
            currMax = Math.max(currMax + n, n)
            currMin = Math.min(currMin + n, n)
            total += n
            
            globalMax = Math.max(globalMax, currMax)
            globalMin = Math.min(globalMin, currMin)
        }
        
        return globalMax > 0 ? Math.max(total - globalMin, globalMax) : globalMax
};