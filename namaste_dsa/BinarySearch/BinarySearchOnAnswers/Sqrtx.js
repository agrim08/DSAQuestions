// Approach: Binary Search on Answer (Square Root of x).
// Intuitively, the square root of x must lie within the search space [1, x/2] for x >= 2.
// We binary search this range and calculate the square of the candidate mid value.
// If mid * mid matches x, mid is the answer; if too large, we search the left half.
// If too small, we search the right half, eventually returning high pointer as the floor value.
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