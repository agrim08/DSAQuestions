function countDigit(n){
    let count = 0;
    let temp = Math.abs(n);

    if(temp === 0){
        return 1;
    }
    while(temp >= 1){
        count++;
        temp = temp / 10;
    }

    return count;
}

function optimizedSol(n){
    if(n === 0) return 1;
    return Math.floor(Math.log10(Math.abs(n))) + 1;
}

let n = 1234567890 * 1000000;


console.time("Traditional");
let res1 = countDigit(n);
console.timeEnd("Traditional");

console.time("Optimized");
let res2 = optimizedSol(n);
console.timeEnd("Optimized");

console.log("Traditional Output:", res1);
console.log("Optimized Output:", res2);
