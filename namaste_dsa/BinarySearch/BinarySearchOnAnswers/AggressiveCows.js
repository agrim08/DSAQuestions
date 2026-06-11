// Approach: Binary Search on Answer (Maximize Minimum Distance).
// We sort the stall positions and search for the maximum minimum distance in range [1, max-min].
// A helper check function verifies if K cows can be placed with at least 'mid' distance apart.
// If placement is successful, we record the distance and search the right half to maximize it.
// If not, we search the left half for a smaller distance, eventually returning the optimal answer.

function aggressiveCows(arr, k) {
    let n = arr.length
    arr.sort((a, b) => a - b)
    let l = 1
    let r = arr[n - 1] - arr[0]

    while (l <= r) {
        let mid = Math.floor((l + r) / 2)

        if (check(mid)) {
            l = mid + 1
        }
        else {
            r = mid - 1
        }
    }

    function check(dist) {
        let cowCount = 1
        let lastCow = arr[0]

        for (let dis of arr) {
            if (dis - lastCow >= dist) {
                cowCount++
                lastCow = dis
            }
            if (cowCount >= k) return true
        }
        return false
    }
    return r
}