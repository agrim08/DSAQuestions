var largestOddNumber = function(num) {
    let end = -1

    for(let i = num.length - 1; i >= 0; i--){
        if(Number(num[i]) % 2 === 1){
            end = i
            break
        }
    }

    if(end === -1) return ""

    res = ""
    for(let i = 0; i <= end; i++){
        res += num[i]
    }

    return res
};