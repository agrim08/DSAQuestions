function findPeak(nums){
    let l = 0
    let r = nums.length - 1

    while(l < r){
        let m = l + Math.floor((r - l) / 2)

        if(nums[m] < nums[m + 1]){
            // we are in increasing part, so peak is on right side
            l = m + 1
        }else{
            // we are in decreasing part, so peak is on left side
            r = m
        }
    }
    return l
}