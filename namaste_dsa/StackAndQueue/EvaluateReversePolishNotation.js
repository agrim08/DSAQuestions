var evalRPN = function(arr) {
    let s = []  
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === "+" || arr[i] === "*" || arr[i] === "/" || arr[i] === "-"){
            let a = s.pop()
            let b = s.pop()

            let ans = Math.trunc(eval(`${b} ${arr[i]} ${a}`)) //2(-3)- => 2--3
            s.push(ans)
        }else{
            s.push(arr[i])
        }
    }

    return Number(s.pop())
};