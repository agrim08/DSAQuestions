function removeElement(nums, val){
    let i = 0
    let n = nums.length

    while(i < n){
        if(nums[i] === val){
            nums.splice(i, 1)
        }else{
            i++
        }
    }
    return nums.length
}

console.log(removeElement([0,1,2,2,3,0,4,2], 2))