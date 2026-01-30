/**
 * Approach: Three-Pointer Max Tracking.
 * Intuitively, we maintain three variables: `first`, `second`, and `third` 
 * to store the top three unique maximums. We update them as we scan the 
 * array, ensuring we handle duplicates and return the absolute max if 
 * the third max doesn't exist.
 */
var thirdMax = function(nums) {
    let first = second = third = null

    for(let num of nums){
        if(num == first || num == second || num == third){
            continue
        }

        if(first == null || num > first){
            third = second
            second = first
            first = num
        }
        else if(second === null || num > second){
            third = second
            second = num
        }
        else if(third === null || num > third){
            third = num
        }
    }

    return third == null ? first : third
};