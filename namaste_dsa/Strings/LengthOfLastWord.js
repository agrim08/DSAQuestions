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