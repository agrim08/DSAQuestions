let firstNonRepeating = (s) => {
        let map = new Map()
        let q = []
        let res = ''
        
        for(let char of s){
            map.set(char, (map.get(char) || 0) + 1)
            q.push(char)
            
            while(q.length && map.get(q[0]) > 1){
                q.shift()
            }
            
            res += q.length ? q[0] : "#"
        }
        return res
}
