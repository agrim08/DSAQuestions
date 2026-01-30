/**
 * Approach: Stack Comparison.
 * Intuitively, the most recently opened bracket must be the first one to be 
 * closed. We push open brackets onto a stack and, when seeing a closing 
 * bracket, ensure it matches the one at the top of the stack.
 */
var isValid = function(s) {
    let stack = []
    let map = {
        "{" : "}",
        "[" : "]",
        "(" : ")"  
    }

    for(let i = 0; i < s.length; i++){
        if(map[s[i]]){
            stack.push(s[i])
        }else{
            let top = stack.pop()
            if(!top || s[i] != map[top]){
                return false
            }
        }
    }

    return stack.length === 0
};