function moveZeros(nums){
    let zeroTrack = 0

    for(let i = 0; i < nums.length; i++){
        if(nums[i] !== 0){
            [nums[i], nums[zeroTrack]] = [nums[zeroTrack], nums[i]]
            zeroTrack++
        }
    }
    console.log(nums)
}

moveZeros([0,1,0,3,12])