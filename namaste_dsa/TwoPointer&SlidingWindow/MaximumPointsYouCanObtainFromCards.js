var maxScore = function (arr, k) {
    let lSum = 0
    let rSum = 0
    let max = 0

    for (let i = 0; i <= k - 1; i++) {
        lSum += arr[i]
    }
    max = lSum

    let rIndex = arr.length - 1

    for(let i = k - 1; i >= 0; i--){
        lSum -= arr[i]
        rSum += arr[rIndex]
        rIndex -= 1

        max = Math.max(max, lSum + rSum)
    }

    return max
};