var minFlips = function (s) {
    let n = s.length
    s = s + s

    let s1 = ""
    let s2 = ""

    for (let i = 0; i < n * 2; i++) {
        s1 += (i % 2 ? "0" : "1")
        s2 += (i % 2 ? "1" : "0")
    }

    let res = Infinity
    let flip1 = 0
    let flip2 = 0

    let i = 0
    let j = 0

    while (j < 2 * n) {
        if (s[j] !== s1[j]) {
            flip1++
        }
        if (s[j] !== s2[j]) {
            flip2++
        }
        if (j - i + 1 > n) {
            if (s[i] !== s1[i]) {
                flip1--
            }
            if (s[i] !== s2[i]) {
                flip2--
            }
            i++
        }
        if (j - i + 1 === n) {
            res = Math.min(res, flip1, flip2)
        }
        j++
    }
    return res
};