/**
 * Approach: Linear Comparison.
 * Intuitively, we assume the first element is the smallest. As we scan the 
 * rest of the array, we update our 'smallest' variable whenever we find 
 * a smaller value.
 */
let arr = [1, -3, 10, 0, -3, -99, 0, 7, -12, -15]
let smallest = arr[0]

for(let i = 1; i < arr.length; i++){
    if(arr[i] < smallest){
        smallest = arr[i]
    }
}

console.log(smallest)