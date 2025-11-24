var subsets = function(arr) {
    let res = []
    let backtrack = (path, start) => {
        res.push([...path])
        for(let i = start; i < arr.length; i++){
            path.push(arr[i])
            backtrack(path, i + 1)
            path.pop()
        }
    }
    backtrack([], 0)
    return res
};