var longestOnes = function(arr, k) {
    let max = 0
    let left = 0
    let zeroCount = 0

    for(let right = 0; right < arr.length; right++){
        if(arr[right] === 0) zeroCount++

        while(zeroCount > k){
            if(arr[left] === 0){
                zeroCount--
            }
            left++
        }

        max = Math.max(max, right - left + 1)
    }

    return max
};