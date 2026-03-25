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