var isAlienSorted = function(words, order) {
    const map = new Map()

    for(let i = 0; i < order.length; i++){
        map.set(order.charAt(i), i)
    }

    for(let i = 0; i < words.length - 1; i++){
        let isEqual = true 
        for(let j = 0; j < words[i].length; j++){
            if(j >= words[i + 1].length){
                return false
            }

            if(words[i].charAt(j) != words[i + 1].charAt(j)){
                let curr = map.get(words[i].charAt(j))
                let next = map.get(words[i + 1].charAt(j))
                if(next < curr){
                    return false
                }
                else{
                    isEqual = false
                    break
                }
            }
        }
        if (isEqual && words[i].length > words[i + 1].length) {
            return false
        }
    }
    return true
};