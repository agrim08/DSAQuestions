var minFlips = function (s) {
    let n = s.length

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
        if (s[j % n] !== s1[j]) { //trick to access circular elements
            flip1++
        }
        if (s[j % n] !== s2[j]) {
            flip2++
        }
        if (j - i + 1 > n) {
            if (s[i % n] !== s1[i]) {
                flip1--
            }
            if (s[i % n] !== s2[i]) {
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


//O(1) space
var minFlips = function (s) {
    let n = s.length

    let res = Infinity
    let flip1 = 0
    let flip2 = 0
    let i = 0
    let j = 0

    while (j < 2 * n) {

        let s1 = (j % 2 ? "0" : "1")
        let s2 = (j % 2 ? "1" : "0")

        if (s[j % n] !== s1) flip1++
        if (s[j % n] !== s2) flip2++

        if (j - i + 1 > n) {

            let left1 = (i % 2 ? "0" : "1")
            let left2 = (i % 2 ? "1" : "0")

            if (s[i % n] !== left1) flip1--
            if (s[i % n] !== left2) flip2--

            i++
        }

        if (j - i + 1 === n) {
            res = Math.min(res, flip1, flip2)
        }

        j++
    }

    return res
};