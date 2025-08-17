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