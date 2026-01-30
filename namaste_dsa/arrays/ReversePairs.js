/**
 * Approach: Modified Merge Sort.
 * Intuitively, we use the merge sort structure to count pairs. Before 
 * merging two sorted subarrays, we count how many elements in the left 
 * subarray are greater than twice the elements in the right subarray, 
 * preserving O(N log N) complexity.
 */
var reversePairs = function (arr) {
    return mergeSort(arr, 0, arr.length - 1);
};

function mergeSort(arr, left, right) {
    if (left >= right) return 0;

    let mid = Math.floor((left + right) / 2);
    let count = 0;

    count += mergeSort(arr, left, mid);
    count += mergeSort(arr, mid + 1, right);
    count += countPairs(arr, left, mid, right);
    merge(arr, left, mid, right);

    return count;
}

function countPairs(arr, left, mid, right) {
    let count = 0;
    let j = mid + 1;

    for (let i = left; i <= mid; i++) {
        while (j <= right && arr[i] > 2 * arr[j]) {
            j++;
        }
        count += (j - (mid + 1));
    }

    return count;
}

function merge(arr, left, mid, right) {
    let temp = [];
    let i = left;
    let j = mid + 1;

    while (i <= mid && j <= right) {
        if (arr[i] <= arr[j]) {
            temp.push(arr[i++]);
        } else {
            temp.push(arr[j++]);
        }
    }

    while (i <= mid) temp.push(arr[i++]);
    while (j <= right) temp.push(arr[j++]);

    for (let k = left; k <= right; k++) {
        arr[k] = temp[k - left];
    }
}