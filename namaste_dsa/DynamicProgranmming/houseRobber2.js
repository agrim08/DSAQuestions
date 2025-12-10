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