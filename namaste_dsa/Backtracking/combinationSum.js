var combinationSum = function(arr, target) {
    let res = []

    let backtrack = (path, start, rem) => {
        if(rem < 0){
            return
        }
        if(rem === 0){
            res.push([...path])
            return
        }

        for(let i = start; i < arr.length; i++){
            path.push(arr[i])
            backtrack(path, i, rem - arr[i])
            path.pop()
        }
    }

    backtrack([], 0, target)
    return res
};