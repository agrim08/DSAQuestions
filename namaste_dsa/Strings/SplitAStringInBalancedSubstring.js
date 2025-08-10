//approach 1 using stack
var balancedStringSplit = function(s) {
    let stack = []
    let count = 0

    for(let i = 0; i < s.length; i++){
        if(stack.length > 0 && stack[stack.length - 1] !== s[i]){
            stack.pop()
        }else{
            stack.push(s[i])
        }

        if(stack.length === 0) count++
    }

    return count
};

//approach 2 with extra space
var balancedStringSplitOptimized = function(s) {
    let count = 0
    let countR = 0
    let countL = 0

    for(let i = 0; i < s.length; i++){
        if(s[i] === 'R') countR++
        else countL ++

        if(countR === countL){
            count++
            countR = countL = 0
        }
    }

    return count
};