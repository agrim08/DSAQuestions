/**
 * Approach: Linear Comparison.
 * Intuitively, we assume the first element is the largest. As we scan the 
 * rest of the array, we update our 'largest' variable whenever we find 
 * a bigger value.
 */
let arr = [1, -3, 10, 0, -3, -99, 0, 7, -12, -15]
let largest = arr[0]

for(let i = 1; i < arr.length; i++){
    if(arr[i] > largest){
        largest = arr[i]
    }
}

console.log(largest)