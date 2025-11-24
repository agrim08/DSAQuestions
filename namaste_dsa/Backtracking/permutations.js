var permute = function (arr) {
    let res = []

    let backtrack = (path) => {
        if (path.length === arr.length) {
            res.push([...path])
            return
        }
        for (let i = 0; i < arr.length; i++) {
            if(!path.includes(arr[i])){
                path.push(arr[i])
                backtrack(path)
                path.pop()
            }    
        }
    }

    backtrack([])
    return res
};