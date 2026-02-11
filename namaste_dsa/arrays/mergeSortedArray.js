/**
 * Approach: Uses three pointers starting from the end of the arrays.
 * By filling nums1 from the back (indices m+n-1 towards 0), we avoid overwriting 
 * existing elements in nums1 that haven't been compared yet.
 * This results in an O(m+n) time complexity and O(1) space complexity.
 */
function mergeSortedArrays(nums1, m, nums2, n) {
    let p1 = m - 1
    let p2 = n - 1

    for(let i = m + n - 1; i >= 0; i--){

        if(p2 < 0){
            break
        }

        if(p1 >= 0 && nums1[p1] > nums2[p2]){
            nums1[i] = nums1[p1]
            p1--
        }
        else{
            nums1[i] = nums2[p2]
            p2--
        }
    }
};