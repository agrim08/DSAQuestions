function maxSubarraySum(arr, k) {
    let i = 0
    let sum = 0
    let maximum = 0

    for (let j = 0; j < arr.length; j++) {
        sum += arr[j]

        while (j - i + 1 > k) {
            sum -= arr[i]
            i++
        }

        maximum = Math.max(maximum, sum)
    }

    return maximum
}