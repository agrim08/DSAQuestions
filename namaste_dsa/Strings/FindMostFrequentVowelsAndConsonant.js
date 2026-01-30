/**
 * Approach: Frequency Map + Category Filtering.
 * Intuitively, we find how often each character appears. Then, we find the 
 * highest frequency among vowels and the highest frequency among consonants 
 * separately, and return their sum.
 */
var maxFreqSum = function(s) {
    let map = {}

    for(let i = 0; i < s.length; i++){
        map[s[i]] = map[s[i]] ? ++map[s[i]] : 1
    }

    let mapKeys = Object.keys(map)
    let vowels = ["a", "e", "i", "o", "u"]
    let maxV = 0
    let maxC = 0

    for(let i = 0; i < mapKeys.length; i++){
        if(vowels.includes(mapKeys[i])){
            maxV = Math.max(maxV, map[mapKeys[i]])
        }else{
            maxC = Math.max(maxC, map[mapKeys[i]])
        }
    }

    return maxV + maxC
};

//TC of 2nd loop is O(1) as we can have max 26 characters only inside map


console.log(maxFreqSum("successes"))
console.log(maxFreqSum("aababbb"));
