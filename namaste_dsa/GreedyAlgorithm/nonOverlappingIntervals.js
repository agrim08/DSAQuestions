var eraseOverlapIntervals = function(arr) {
    arr.sort((a, b) => (a[1] - b[1]))

    let count = 0
    let k = -Infinity

    for(let i = 0; i < arr.length; i++){
        if(arr[i][0] < k){
            count++
        }
        else{
            k = arr[i][1]
        }
    }

    return count
};