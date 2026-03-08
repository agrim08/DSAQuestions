var minimumIndex = function(capacity, itemSize) {
    let ans = -1

    for(let i = 0; i < capacity.length; i++){
        if(capacity[i] >= itemSize){
            if(capacity[i] < capacity[ans] || ans === -1){
                ans = i
            }
        }
    }
    return ans
};