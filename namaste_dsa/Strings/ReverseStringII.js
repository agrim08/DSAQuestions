var reverseStr = function(s, k) {
    s = s.split("")
    
    for(let x = 0; x < s.length; x += (2*k)){
        let mid = Math.floor(k/2)
            for(let i = 0; i < mid; i++){
                let temp = s[x + i]
                s[i + x] = s[x + k - i - 1]
                s[x + k - i - 1] = temp
            }
    }

    return s.join("")
};