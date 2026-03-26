function aggressiveCows(arr, k) {
        let n = arr.length
        // code here
        arr.sort((a, b) => a - b)
        let l = 1
        let r = arr[n - 1] - arr[0]
        
        while(l <= r){
            let mid = Math.floor((l + r) / 2)
            
            if(check(mid)){
                l = mid + 1
            }
            else{
                r = mid - 1
            }
        }
        
        function check(dist){
            let cowCount = 1
            let lastCow = arr[0]
            
            for(let dis of arr){
                if(dis - lastCow >= dist){
                    cowCount++
                    lastCow = dis
                }
                if(cowCount >= k) return true
            }
            return false
        }
    return r
}