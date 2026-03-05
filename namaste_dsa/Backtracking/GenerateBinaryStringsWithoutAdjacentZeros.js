var validStrings = function(n) {
    const res = []

    function backtrack(str){
        if(str.length === n){
            res.push(str)
            return 
        }

        backtrack(str + "1")

        if(str.length === 0 || str[str.length - 1] != "0"){
            backtrack(str + "0")
        }
    }
    backtrack("")
    return res
};