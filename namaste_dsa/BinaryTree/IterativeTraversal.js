var preorderTraversal = function(root) {
    if(!root) return []
    let ans = []
    let stack = [root]

    while(stack.length){
        let curr = stack.pop()
        ans.push(curr.val)
        curr.right && stack.push(curr.right)
        curr.left && stack.push(curr.left)
    }

    return ans
};


var inorderTraversal = function(root) {
    let ans = []
    let s = []
    let curr = root

    while(curr || s.length){
        while(curr){
            s.push(curr)
            curr = curr.left
        }

        curr = s.pop()
        ans.push(curr.val)
        curr = curr.right
    }

    return ans
};