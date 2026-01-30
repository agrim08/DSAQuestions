/**
 * Approach: Monotonic Stack (Decreasing).
 * Intuitively, we keep a stack of temperatures that haven't found a warmer day yet.
 * When we see a warmer temperature, we pop indices from the stack and calculate 
 * the number of days between the warmer day and each 'waiting' index.
 */
var dailyTemperatures = function(t) {
    let s = []
    let n = t.length
    let ans = Array(n).fill(0)
    s.push(n - 1)

    for(let i = n - 2; i >= 0; i--){
        while(s.length != 0){
            let top = s[s.length - 1]
            if(t[i] >= t[top]){
                s.pop()
            }else{
                ans[i] = top - i
                break
            }
        }
        s.push(i)
    }
    return ans
};