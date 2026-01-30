/**
 * Approach: Linear Scan.
 * Intuitively, we traverse the array and maintain a counter that 
 * increments whenever we encounter an element less than zero.
 */
let arr = [1, -3, 10, 0, -3, -99, 0, 7, -12, -15]
let count = 0

for(let i = 0; i < arr.length; i++){
    if(arr[i] < 0){
        count++
    }
}

console.log(count)