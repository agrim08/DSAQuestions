function midDays(arr, m, k){
    if(m * k > arr.length) return -1

    let low = Math.min(...arr)
    let high = Math.max(...arr)

    let res = -1

    while(low <= high){
        let mid = Math.floor((low + high) / 2)
        if(check(mid)){
            res = mid
            high = mid - 1
        }
        else{
            low = mid + 1
        }
    }

    function check(day){
        let count = 0
        let noOfBloom = 0

        for(let i = 0; i < arr.length; i++){
            if(arr[i] <= day){
                count++
            }
            else{
                noOfBloom += Math.floor(count / k)
                count = 0
            }
        }
        noOfBloom += Math.floor(count / k)

        if(noOfBloom >= m) return true
        else return false
    }

    return res
}

console.log(midDays([7,7,7,7,12,7,7], 2, 3))