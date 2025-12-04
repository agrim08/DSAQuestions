var permuteUnique = function(arr) {
    arr.sort((a, b) => (a - b))
    let res = []

    let backtrack = (path, choices) => {
        if (path.length === arr.length) {
            res.push([...path])
            return
        }
        for (let i = 0; i < choices.length; i++) {
            if(i > 0 && choices[i] === choices[i - 1]){
                continue
            }
            path.push(choices[i])
            backtrack(path, [...choices.slice(0, i), ...choices.slice(i + 1)])
            path.pop()    
        }
    }

    backtrack([], arr)
    return res
};