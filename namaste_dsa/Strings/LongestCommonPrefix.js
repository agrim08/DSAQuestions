var longestCommonPrefix = function(s) {
    let x = 0

    if(s.length === 1) return s[0]

    while(x <= s[0].length){
        let ch = s[0][x]
        for(let i = 1; i < s.length; i++){
            if(ch != s[i][x]){
                return s[0].substring(0, x)
            }
        }
        ++x
    }
    return s[0]
};