function perfectSum(arr, target) {
    let len = arr.length
    let store = Array.from({ length: len }, () => Array(target + 1).fill(-1))

    function helper(index, currentSum) {

        if (store[index][currentSum] !== -1) return store[index][currentSum]

        if (index === 0) {
            if (currentSum === 0 && arr[0] === 0) return 2;
            if (currentSum === 0 || currentSum === arr[0]) return 1;
            return 0;
        }

        let take = 0
        if (arr[index] <= currentSum) {
            take = helper(index - 1, currentSum - arr[index])
        }
        let notTake = helper(index - 1, currentSum)

        return store[index][currentSum] = (take + notTake);
    }
    return helper(len - 1, target)
}