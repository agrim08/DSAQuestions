var nextGreatestLetter = function(letters, target) {
    let l = 0
    let r = letters.length - 1
    let ans = letters[0]

    while(l <= r){
        let mid = Math.floor((l + r) / 2)

        if(letters[mid] > target){
            ans = letters[mid]
            r = mid - 1
            r
        }
        else{
            l = mid + 1
        }
    }
    return ans
};