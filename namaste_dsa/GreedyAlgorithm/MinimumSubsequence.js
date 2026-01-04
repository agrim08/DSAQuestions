var minSubsequence = function(arr) {
    arr.sort((a, b) => b - a)

    let totalSum = arr.reduce((a, b) => a + b, 0)
    let res = []
    let currSum = 0

    for(let num of arr){
        currSum += num
        res.push(num)
        if(currSum > totalSum - currSum){
            break
        }
    }

    return res
};