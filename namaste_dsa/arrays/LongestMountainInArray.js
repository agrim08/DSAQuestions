var longestMountain = function(arr) {
    if(arr.length < 3) return 0

    let peak = false
    let valley = false
    let ans = 0
    let i = 0

    while( i < arr.length){
        if(arr[i + 1] > arr[i]){
            let start = i

            while(i < arr.length && arr[i] < arr[i + 1]){
                peak = true
                i++
            }

            while(i < arr.length && arr[i] > arr[i + 1]){
                valley = true
                i++
            }

            if(peak === true && valley === true){
                ans = Math.max(ans, i - start + 1)
            }
            peak = false
            valley = false
        }
        else{
            i++
        }
    }
    return ans
};