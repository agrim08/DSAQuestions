//two pass
var candy = function(arr) {
    let n = arr.length
    let ltr = Array(n).fill(1)
    let ans = 0

    for(let i = 1; i < n; i++){
        if(arr[i] > arr[i - 1]){
            ltr[i] = ltr[i - 1] + 1
        }
    }
    let rtl = Array(n).fill(1)
    for(let i = n - 2; i >= 0; i--){
        if(arr[i] > arr[i + 1]){
            rtl[i] = rtl[i + 1] + 1
        }
    }
    for(let i = 0; i < n; i++){
        ans += Math.max(ltr[i], rtl[i])
    }
    return ans
};

//one pass
var candy = function(arr) {
    const n = arr.length;
    let ans = n
    let i = 1

    while(i < n){
        if(arr[i] == arr[i - 1]){
            i++
            continue
        }
        let up = 0
        while(i < n && arr[i] > arr[i - 1]){
            up++
            ans += up
            ++i
        }
        let down = 0
        while(i < n && arr[i] < arr[i - 1]){
            down++
            ans += down
            ++i
        }
        ans = ans - Math.min(up, down)
    }
    return ans
};