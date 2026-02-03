var isTrionic = function(arr) {
    let n = arr.length
    if(n < 4) return false

    let i = 1
    while(i < n && arr[i] > arr[i - 1]){
        i++
    }

    if (i === 1) return false;

    // 2️⃣ strictly decreasing
    while (i < n && arr[i] < arr[i - 1]) {
        i++;
    }
    // must have at least one decrease
    if (i === n || arr[i - 1] >= arr[i - 2]) return false;

    // 3️⃣ strictly increasing again
    while (i < n && arr[i] > arr[i - 1]) {
        i++;
    }

    // must consume entire array
    return i === n;
};