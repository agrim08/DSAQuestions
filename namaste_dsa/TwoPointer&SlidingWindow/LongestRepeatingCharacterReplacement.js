var characterReplacement = function(s, k) {
    let i = 0, j = 0
    let map = {}
    map[s[i]] = 1
    let maxWindow = 0

    while(j < s.length){
        if(isWindowValid(map, k)){
            maxWindow = Math.max(maxWindow, (j - i + 1))
            ++j
            map[s[j]] = !map[s[j]] ? 1 : ++map[s[j]]
        }else{
            --map[s[i]]
            ++i
        }
    }

    return maxWindow
};

var isWindowValid = function(map, k){
    let totalCount  = 0
    let maxCount = 0
    for(let i = 0; i < 26; i++){
        let char = String.fromCharCode(65 + i)
        if(map[char]){
            totalCount = totalCount + map[char]
            maxCount = Math.max(maxCount , map[char])
        }
    }

    return (totalCount - maxCount <= k)
}