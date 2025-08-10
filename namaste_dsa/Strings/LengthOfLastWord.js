var lengthOfLastWord = function(s) {
    let i = s.length - 1
    while(i >= 0 && s[i] == " "){
        i--
    }

    if(i < 0) return;

    let count = 0;
    while(i >= 0 && s[i] != " "){
        count++
        i--
    }

    return count
};

//in one loop

function lengthOfLastWord(s) {
    let count = 0
    let n = s.length - 1

    while(n >= 0){
        if(s[n] != " "){
            count++
        }else if(count > 0){
            break
        }
        n--
    }

    return count
}