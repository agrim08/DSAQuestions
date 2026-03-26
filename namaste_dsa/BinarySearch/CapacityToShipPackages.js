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