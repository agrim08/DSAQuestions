var minimumDistance = function (nums) {
    let n = nums.length
    if (n <= 2) return -1

    let map = {}
    let ans = Infinity

    for (let i = 0; i < n; i++) {
        let val = nums[i]
        if (map[val] === undefined) {
            map[val] = [i]
        }
        else {
            map[val].push(i)

            if (map[val].length >= 3) {
                let first = map[val][0]
                let currDist = 2 * (i - first)

                if(currDist < ans){
                    ans = currDist
                }
                map[val].shift()
            }
        }
    }
    return ans === Infinity ? -1 : ans
};