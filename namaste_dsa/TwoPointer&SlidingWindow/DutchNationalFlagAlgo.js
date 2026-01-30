/**
 * Approach: Dutch National Flag (Three Pointers).
 * Intuitively, we use three pointers (`low`, `mid`, `high`) to partition 
 * the array into three sections: 0s on the left, 2s on the right, and 1s 
 * in the middle. We swap elements to maintain this invariant.
 */
var sortColors = function(arr) {
    let low = 0
    let mid = 0
    let high = arr.length - 1

    while(mid <= high){
        if(arr[mid] === 0){
            swap(arr, low, mid)
            mid++
            low++
        }
        else if(arr[mid] === 2){
            swap(arr, high, mid)
            high--
        }
        else{
            mid++
        }
    }

};

var swap = function(arr, i1, i2){
    let temp = arr[i1]
    arr[i1] = arr[i2]
    arr[i2] = temp
}