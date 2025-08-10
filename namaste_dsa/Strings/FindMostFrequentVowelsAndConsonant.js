var maxFreqSum = function(s) {
    let map = {}

    for(let i = 0; i < s.length; i++){
        if(!map[s[i]]){
            map[s[i]] = 1
        }else{
            ++map[s[i]]
        }
    }

    let mapKeys = Object.keys(map)
    let vowels = ["a", "e", "i", "o", "u"]
    let maxV = 0
    let maxC = 0

    for(let i = 0; i < mapKeys.length; i++){
        if(vowels.includes(mapKeys[i])){
            if(map[mapKeys[i]] > maxV){
                maxV = map[mapKeys[i]]
            }
        }else{
            if(map[mapKeys[i]] > maxC){
                maxC = map[mapKeys[i]]
            }
        }
    }

    return maxV + maxC
};


console.log(maxFreqSum("successes"))
console.log(maxFreqSum("aababbb"));
