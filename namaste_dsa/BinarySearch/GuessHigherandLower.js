/**
 * Approach: Binary Search.
 * Intuitively, this is a standard binary search where we treat the 'guess' feedback
 * as low/high hints. We keep halving the search space based on whether the guess
 * was too high or too low until we find the correct number.
 */
var guessNumber = function(n) {
    let l = 0
    let r = n

    while(l <= r){
        let mid = l + Math.floor((r - l) / 2)
        if(guess(mid) === 0){
            return mid
        }else if(guess(mid) === -1){
            r = mid - 1
        }else{
            l = mid + 1
        }

    }
};