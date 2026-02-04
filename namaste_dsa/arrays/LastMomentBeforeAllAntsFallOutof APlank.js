var getLastMoment = function (n, left, right) {
    let ans = 0

    for (let l of left) {
        ans = Math.max(ans, l)
    }

    for (let r of right) {
        ans = Math.max(ans, n - r)
    }

    return ans
};