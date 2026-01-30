/**
 * Approach: Dynamic Programming.
 * Intuitively, this is identical to House Robber 1, but since houses are in a circle,
 * robbing the first excludes the last and vice versa. We run the standard logic twice:
 * once excluding the first house and once excluding the last, then take the maximum.
 */
var rob = function(arr) {
    let n = arr.length
    if(n === 1) return arr[0]
    
    var robHelper = function(start, end) {
        let prev1 = 0
        let prev2 = 0

        for(let i = start; i <= end; i++){
            let curr = Math.max(arr[i] + prev1, prev2)
            prev1 = prev2
            prev2 = curr
        }   
        return prev2
    }

    return Math.max(robHelper(0, n - 2), robHelper(1, n - 1))
};