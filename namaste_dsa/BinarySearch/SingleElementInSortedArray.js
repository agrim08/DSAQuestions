/**
 * Approach: Binary Search on Even/Odd Indices.
 * Intuitively, in an array of pairs, the single element disrupts the index pattern.
 * We check whether the counts on the left or right are even or odd to determine
 * which side contains the solitary number.
 */
const singleNonDuplicate = function(arr){
    let l = 0
    let r = arr.length - 1

    while (l <= r) {
        let m = l +  Math.floor((r - l) / 2)
        if (arr[m] === arr[m - 1]){
            let leftCount = m - l - 1
            if(leftCount % 2 === 1){
                r = m - 2
            }else{
                l = m + 1
            }
        }
        else if(arr[m] === arr[m + 1]){
            let leftCount = m - l
            if(leftCount % 2 === 1){
                r = m - 1
            }else{
                l = m + 2
            }
        }
        else{
            return arr[m]
        }
    }
}

console.log(singleNonDuplicate([1,1,2,3,3,4,4,8,8]));
console.log(singleNonDuplicate([3,3,7,7,10,11,11]));
