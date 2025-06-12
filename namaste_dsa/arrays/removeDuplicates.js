function removeDuplicates(nums){
    let x = 0
    for(let i = 1; i < nums.length; i++){
        if(nums[x] !== nums[i]){
            nums[x + 1] = nums[i]
            x++
        }
    }
    return x + 1
}

console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))