var maxProduct = function(arr) {
    let currMax = arr[0]
    let currMin = arr[0]
    let ans = arr[0]

    for(let i = 1; i < arr.length; i++){
        let temp = currMax
        currMax = Math.max(arr[i], arr[i] * currMax, arr[i] * currMin)
        currMin = Math.min(arr[i], arr[i] * temp, arr[i] * currMin)

        ans = Math.max(ans, currMax)
    }

    return ans
};