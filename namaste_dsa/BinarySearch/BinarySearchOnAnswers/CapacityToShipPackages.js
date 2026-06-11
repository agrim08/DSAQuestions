// Approach: Binary Search on Answer (Minimizing Maximum Ship Capacity).
// The search space ranges from the maximum package weight (minimum capacity to ship any single item) to the sum of all weights.
// We binary search for the minimum capacity within this range that allows shipping all packages within the given days limit.
// A helper check function calculates the number of days required to ship packages sequentially for a given candidate capacity.
// If the required days are within the limit, we try a smaller capacity; otherwise, we must increase the capacity.
var shipWithinDays = function (arr, days) {
    let l = Math.max(...arr)
    let r = arr.reduce((acc, cur) => acc + cur, 0)
    let res = r

    while (l <= r) {
        let mid = Math.floor((l + r) / 2)

        if (check(mid) <= days) {
            res = mid
            r = mid - 1
        }
        else {
            l = mid + 1
        }
    }

    function check(cap) {
        let day = 1
        let load = 0
        for (let w of arr) {
            if (load + w > cap) {
                day++
                load = w
            }
            else {
                load += w
            }
        }
        return day
    }

    return res
};