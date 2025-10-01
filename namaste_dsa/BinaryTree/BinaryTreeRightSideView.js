var rightSideView = function(root) {
    if(!root) return []
    let ans = []
    let q = [root]

    while(q.length){
        let levelSize = q.length
        for(let i = 0; i < levelSize; i++){
            let curr = q.shift()
            i === 0 && ans.push(curr.val)
            curr.right && q.push(curr.right)
            curr.left && q.push(curr.left)
        }
    }

    return ans
};