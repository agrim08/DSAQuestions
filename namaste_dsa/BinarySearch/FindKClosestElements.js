/**
 * Approach: Binary Search on the Window.
 * Intuitively, instead of finding the element itself, we search for the starting
 * index `l` of the window of size `k`. We compare the distance of the elements
 * at `m` and `m + k` from `x` to decide which direction to shift the window.
 */
var findClosestElements = function(arr, k, x) {
    let l = 0
    let r = arr.length - 1

    while(l < r){
        let m = l + Math.floor((r - l) / 2)
        if((arr[m + k] - x) < (x - arr[m])){
            l = m + 1
        }else{
            r = m
        }
    }

    let ans = []
    for(let i = 0; i < l + k; i++){
        ans.push(arr[i])
    }
    return ans
//  return arr.slice(l , l + k)
};