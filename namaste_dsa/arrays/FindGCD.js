//Euclid's Algorithm to find GCD of two numbers
var findGCD = function(nums) {
    let Min = Infinity
    let Max = -Infinity

    for(let num of nums){
        if(num > Max){
            Max = num
        }
        if(num < Min){
            Min = num
        }
    }
    let GCD = (a, b) => {
        if(b === 0) return a
        return GCD(b, a % b)
    }

    return GCD(Max, Min)
};