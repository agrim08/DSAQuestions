/**
 * Approach: Binary Search.
 * Intuitively, in a mountain array, we find the peak by checking if we are on
 * the ascending or descending side. If `arr[m] < arr[m + 1]`, we move right;
 * otherwise, we move left to find the maximum element.
 */
var peakIndexInMountainArray = function(arr) {
    let l = 0
    let r = arr.length - 1

    while(l < r){
        let m = l + Math.floor((r - l) / 2)
        if(arr[m] < arr[m + 1]){
            l = m + 1
        }else{
            r = m
        }
    }

    return l
};