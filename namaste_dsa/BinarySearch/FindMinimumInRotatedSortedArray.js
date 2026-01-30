/**
 * Approach: Binary Search.
 * Intuitively, a rotated sorted array has one sorted half and one unsorted half
 * containing the minimum. We compare `mid` with the boundaries to identify the
 * sorted portion and narrow down the search to the part containing the pivot.
 */
var findMin = function(arr) {
    let l = 0
    let r = arr.length - 1
    while(l <= r){
        if(arr[l] <= arr[r]){
            return arr[l]
        }
        let m = l + Math.floor((r - l) / 2)

        if(arr[m - 1] > arr[m]){
            return arr[m]
        }

        if(arr[m] >= arr[l]){
            l = m + 1
        }
        else{
            r = m - 1
        }
    }
};