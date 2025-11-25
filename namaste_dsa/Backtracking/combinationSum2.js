var combinationSum2 = function(arr, target) {
    let res = []
    arr.sort((a, b) => (a - b))

    let backtrack = (path, start, rem) => {
        if(rem < 0){
            return
        }
        if(rem === 0){
            res.push([...path])
            return
        }

        for(let i = start; i < arr.length; i++){
            if(i > start && arr[i] === arr[i - 1]){
                continue
            }
            path.push(arr[i])
            backtrack(path, i + 1, rem - arr[i])
            path.pop()
        }
    }

    backtrack([], 0, target)
    return res
};