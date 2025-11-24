var combine = function(n, k) {
    let res = []

    let backtrack = (path, start) => {
        if(path.length === k) {
            res.push([...path])
            return
        }
        for(let i = start; i <= n; i++){
            path.push(i)
            backtrack(path, i + 1)
            path.pop()
        }
    }

    backtrack([], 1)
    return res
};