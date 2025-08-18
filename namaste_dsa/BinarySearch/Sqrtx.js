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