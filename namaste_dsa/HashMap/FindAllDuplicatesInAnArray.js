var findDuplicates = function(nums) {
    let map = {}
    let res = []

    for(num of nums){
        if(map[num]){
            res.push(num)
        }else{
            map[num] = 1
        }
    }

    return res
};