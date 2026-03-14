var getHappyString = function(n, k) {
    let count = 0
    let ans = ""

    function backtrack(str){
        if(ans != "") return

        if(str.length === n){
            count++
            if(count === k){
                ans = str
            }
            return
        }

        for(let char of ['a', 'b', 'c']){
            if(str.length > 0 && str[str.length - 1] === char) continue

            backtrack(str + char)
        }
    }

    backtrack("")
    return ans
};