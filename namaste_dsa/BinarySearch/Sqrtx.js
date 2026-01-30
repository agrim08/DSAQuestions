/**
 * Approach: Binary Search on Answer.
 * Intuitively, the square root of `x` must be within `[1, x/2]`. We search this range
 * using binary search, squaring the middle value to see if it's too large or small,
 * eventually narrowing it down to the largest integer whose square <= `x`.
 */
var mySqrt = function(x) {
    if(x == 0 || x == 1) return x
    let l = 2
    let r = Math.floor(x / 2)
    while(l <= r){
        let mid = Math.floor((l + r) / 2)
        if((mid * mid) == x){
            return mid
        }else if((mid * mid) > x){
            r = mid - 1
        }else{
            l = mid + 1
        }
   }

   return r
};