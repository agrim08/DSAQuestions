/**
 * Approach: Pre-computed Prefix/Suffix Maximums.
 * Intuitively, the water trapped at any index is limited by the shorter of 
 * the tallest bars to its left and right. We pre-calculate these boundaries 
 * for every position to compute the trapped water in one pass.
 */
var trap = function(arr) {
    let n = arr.length

    let maxL = []
    maxL[0] = arr[0]

    for(let i = 1; i < n; i++){
        maxL[i] = Math.max(maxL[i - 1], arr[i])
    }

    let maxR = []
    maxR[n - 1] = arr[n - 1]
    for(let i = n - 2; i >= 0; i--){
        maxR[i] = Math.max(arr[i], maxR[i + 1])
    }

    console.log(maxR)
    console.log(maxL)

    let ans = 0
    for(let i = 0; i < n; i++){
        let waterTrapped = (Math.min(maxL[i], maxR[i])) - arr[i]
        ans = ans + Math.max(waterTrapped, 0)
    }

    return ans

};