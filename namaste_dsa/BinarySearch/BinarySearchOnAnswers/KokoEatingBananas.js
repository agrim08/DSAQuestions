// Approach: Binary Search on Answer (Minimizing Eating Speed).
// The search space ranges from 1 banana/hour (minimum speed) to the maximum pile size (maximum speed).
// We binary search for the minimum speed that allows Koko to eat all bananas within H hours.
// For a candidate speed 'mid', we compute the total hours required by rounding up division of each pile.
// If the total hours are within the limit, we try smaller speeds; otherwise, we increase the speed.
var minEatingSpeed = function(piles, h) {
    let l = 1
    let r = Math.max(...piles)

    while(l <= r){
        let m = Math.floor((l + r) / 2)
        let totalH = calcH(m)

        if(totalH <= h){
            r = m - 1
        }
        else{
            l = m + 1
        }
    }
    return l

    function calcH(k){
        let totalHours = 0
        for(let bananas of piles){
            totalHours += Math.ceil(bananas / k)
        }
        return totalHours
    }
};