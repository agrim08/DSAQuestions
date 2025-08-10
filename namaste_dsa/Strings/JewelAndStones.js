var numJewelsInStones = function(jewels, stones) {
    let s = new Set()  
    for(let i = 0; i < jewels.length; i++){
        s.add(jewels[i])
    }

    let count = 0
    for(let i = 0; i < stones.length; i++){
        if(s.has(stones[i])){
            count++
        }
    }

    return count
};