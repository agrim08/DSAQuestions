var asteroidCollision = function(arr) {
    let s = []
    for(let a of arr){
        if(a > 0){
            s.push(a)
        }
        else{
            while(s.length && s[s.length - 1] > 0 && Math.abs(s[s.length - 1]) < Math.abs(a)){
                s.pop()
            }
            if(!s.length || s[s.length - 1] < 0){
                s.push(a)
            }
            else if(Math.abs(s[s.length - 1]) === Math.abs(a)){
                s.pop()
            }
        }
    }
    return s
};