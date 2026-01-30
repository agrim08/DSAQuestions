/**
 * Approach: Greedy (Earliest Deadline First).
 * Intuitively, to minimize removals, we want to keep intervals that end as early
 * as possible. By sorting by end times, we always pick the interval that leaves 
 * the most room for the remaining ones.
 */
var eraseOverlapIntervals = function(arr) {
    arr.sort((a, b) => (a[1] - b[1]))

    let count = 0
    let k = -Infinity

    for(let i = 0; i < arr.length; i++){
        if(arr[i][0] < k){
            count++
        }
        else{
            k = arr[i][1]
        }
    }

    return count
};