var checkInclusion = function(s1, s2) {
    let hashW = Array(26).fill(0)
    let hashS = Array(26).fill(0)

    let window_size = s1.length

    for(let i = 0; i < window_size; i++){
        ++hashW[s1.charCodeAt(i) - 97]
        ++hashS[s2.charCodeAt(i) - 97]
    }

    let i  = 0
    let j = window_size - 1
    while(j < s2.length){
        if(isHashSame(hashW, hashS)){
            return true
        }
        if (j + 1 < s2.length) {
            --hashS[s2.charCodeAt(i) - 97]; 
            ++hashS[s2.charCodeAt(j + 1) - 97];
        }

        i++;
        j++;
    }

    return false
};

var isHashSame = function(hashW, hashS){
    for(let i = 0; i < 26; i++){
        if(hashW[i] != hashS[i]){
            return false
        }
    }

    return true
}