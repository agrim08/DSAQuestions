//watch=https://www.youtube.com/watch?v=LPFhl65R7ww

var findMedianSortedArrays = function(nums1, nums2) {
    if (nums1.length > nums2.length) {
        return findMedianSortedArrays(nums2, nums1);
    }

    let m = nums1.length;
    let n = nums2.length;
    let low = 0, high = m;

    while (low <= high) {
        let cut1 = Math.floor((low + high) / 2);
        let cut2 = Math.floor((m + n + 1) / 2) - cut1;

        let l1 = cut1 === 0 ? -Infinity : nums1[cut1 - 1];
        let l2 = cut2 === 0 ? -Infinity : nums2[cut2 - 1];

        let r1 = cut1 === m ? Infinity : nums1[cut1];
        let r2 = cut2 === n ? Infinity : nums2[cut2];

        if (l1 <= r2 && l2 <= r1) {
            if ((m + n) % 2 === 0) {
                return (Math.max(l1, l2) + Math.min(r1, r2)) / 2;
            } else {
                return Math.max(l1, l2);
            }
        } 
        else if (l1 > r2) {
            high = cut1 - 1;
        } 
        else {
            low = cut1 + 1;
        }
    }
};