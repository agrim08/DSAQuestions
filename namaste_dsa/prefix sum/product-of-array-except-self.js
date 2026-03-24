/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(arr) {
    let ans = new Array(arr.length).fill(1)

    let prefix = 1
    for(let i = 0; i < arr.length; i++){
        ans[i] *= prefix
        prefix *= arr[i]
    }

    let suffix = 1
    for(let i = arr.length - 1; i >= 0; i--){
        ans[i] *= suffix
        suffix *= arr[i]
    }

    return ans
};