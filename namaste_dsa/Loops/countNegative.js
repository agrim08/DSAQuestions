let arr = [1, -3, 10, 0, -3, -99, 0, 7, -12, -15]
let count = 0

for(let i = 0; i < arr.length; i++){
    if(arr[i] < 0){
        count++
    }
}

console.log(count)