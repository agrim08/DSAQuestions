var carPooling = function (arr, capacity) {
    let loc = Array(1001).fill(0)

    for (let i = 0; i < arr.length; i++) {
        let [passengers, from, to] = arr[i]

        loc[from] = loc[from] + passengers
        loc[to] = loc[to] - passengers
    }

    let usedCapacity = 0
    for (let i = 0; i < 1001; i++) {
        usedCapacity = usedCapacity + loc[i]
        if (usedCapacity > capacity) {
            return false
        }
    }

    return true
};