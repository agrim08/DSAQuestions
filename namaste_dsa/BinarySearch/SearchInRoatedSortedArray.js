var search = function(nums, target) {
    let l = 0
    let r = nums.length - 1

    while(l <= r){
        let m = l + Math.floor((r - l) / 2)

        if(target === nums[m]){
            return m
        }

        if(nums[m] >= nums[l]){
            //left sorted
            if(target < nums[m] && target >= nums[l]){
                r = m - 1
            }else{
                l = m + 1
            }
        }else{
            //right sorted
            if(target > nums[m] && target <= nums[r]){
                l = m + 1
            }else{
                r = m - 1
            }
        }
    }

    return -1
};

console.log(search([4,5,6,7,0,1,2], 0));
console.log(search([4,5,6,7,0,1,2], 3)); 
