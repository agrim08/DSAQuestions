var maxSlidingWindow = function(nums, k) {
    let res = []
    let q = []

    let i = j = 0
    while(j < nums.length){
        while(q.length && nums[j] > q[q.length - 1]){
            q.pop()
        }
        q.push(nums[j])

        if(j >= k - 1){
            res.push(q[0])

            nums[i] == q[0] && q.shift()
            ++i
        }
        ++j
    }

    return res
};