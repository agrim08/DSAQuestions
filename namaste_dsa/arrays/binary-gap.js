/**
 * @param {number} n
 * @return {number}
 */
var binaryGap = function(n) {
    let max = 0
    let prev = -1

    for(let i = 0; i < 32; i++){
        if((n & 1) > 0){
            if(prev === -1){
                prev = i
            }
            else{
                max = Math.max(i - prev, max)
                prev = i
            }
        }

        n = n >> 1
    }

    return max
};