/**
 * Approach: Greedy Balance Tracking.
 * Intuitively, we keep a running 'balance' counter. We increment for one 
 * character (e.g., 'R') and decrement for the other ('L'). Every time the 
 * balance hits zero, we have found a primitive balanced substring.
 */
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
    let temp = 0

    for(let i = 0; i < s.length; i++){
        if(s[i] === 'R') ++temp
        else --temp

        if(temp === 0){
            count++
        }
    }

    return count
};

console.log(balancedStringSplitOptimized("RLRRLLRLRL"))