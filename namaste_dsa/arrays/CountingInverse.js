/**
 * Approach: Enhanced Merge Sort.
 * Intuitively, during the merge step, if an element in the right sorted subarray is smaller than an element in the left sorted subarray,
 * it implies that it is smaller than all remaining elements in the left subarray (since the left side is already sorted).
 * We simply add (mid - i + 1) to the inversion count for every such occurrence, achieving O(N log N) logic.
 */
function countInversions(arr) {
    let temp = new Array(arr.length);
    return mergeSort(arr, temp, 0, arr.length - 1);
}

function mergeSort(arr, temp, left, right) {
    let invCount = 0;

    if (left < right) {
        let mid = Math.floor((left + right) / 2);

        invCount += mergeSort(arr, temp, left, mid);
        invCount += mergeSort(arr, temp, mid + 1, right);
        invCount += merge(arr, temp, left, mid, right);
    }

    return invCount;
}

function merge(arr, temp, left, mid, right) {
    let i = left;      // left subarray
    let j = mid + 1;   // right subarray
    let k = left;
    let invCount = 0;

    while (i <= mid && j <= right) {
        if (arr[i] <= arr[j]) {
            temp[k++] = arr[i++];
        } else {
            //right is smaller
            temp[k++] = arr[j++];
            invCount += (mid - i + 1); // 🔥 key line
        }
    }

    while (i <= mid) temp[k++] = arr[i++];
    while (j <= right) temp[k++] = arr[j++];

    for (let idx = left; idx <= right; idx++) {
        arr[idx] = temp[idx];
    }

    return invCount;
}
