/**
 * Approach: Two Pointers (Sorted Input).
 * Intuitively, because the array is sorted, we can use two pointers at the 
 * ends. If their sum is too high, we move the right pointer left; if too 
 * low, we move the left pointer right, narrowing in on the target.
 */
var twoSum = function(arr, target) {
    let l = 0
    let r = arr.length - 1
    while(l <= r){
        if(arr[l] + arr[r] === target){
            return [l + 1, r + 1]
        }else if(arr[l] + arr[r] > target){
            r--
        }else{
            l++
        }
    }
};