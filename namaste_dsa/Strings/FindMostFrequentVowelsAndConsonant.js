var maxFreqSum = function(s) {
    let map = {}

    for(let i = 0; i < s.length; i++){
        if(!map[s[i]]){
            map[s[i]] = 1
        }else{
            ++map[s[i]]
        }
    }

    let vowels = ["a", "e", "i", "o", "u"]
    let maxV = 0
    let maxC = 0

    for(let i = 0; i < s.length; i++){
        if(vowels.includes(s[i])){
            if(map[s[i]] > maxV){
                maxV = map[s[i]]
            }
        }else{
            if(map[s[i]] > maxC){
                maxC = map[s[i]]
            }
        }
    }

    return maxV + maxC
};