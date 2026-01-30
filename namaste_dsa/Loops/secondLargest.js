/**
 * Approach: Single-Pass Max Tracking.
 * Intuitively, we keep track of the two largest numbers seen so far. When 
 * a new number is larger than our current max, it pushes the old max down 
 * to 'second largest'. If it's smaller than max but larger than second, 
 * we only update the latter.
 */
let arr = [1, -3, 1, 10, 0, -3, -99, 0, 7, -12, -15]
let largest = -Infinity
let secLargest = -Infinity

for(let i = 0; i < arr.length; i++){
    if(arr[i] > largest){
        secLargest = largest
        largest = arr[i]
        // console.log(i, arr[i])
    }
    else if(arr[i] > secLargest && arr[i] != largest){
        secLargest = arr[i]
        // console.log(i, arr[i])
    }
}

console.log(secLargest)
