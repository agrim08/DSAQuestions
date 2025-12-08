var binaryTreePaths = function(root) {
    let res = []

    let backtrack = (path, node) => {
        if (!node) return
        path.push(node.val)

        if (!node.left && !node.right) {
            res.push(path.join("->"))
        } else {
            backtrack(path, node.left)
            backtrack(path, node.right)
        }
        
        path.pop()
    }

    backtrack([], root)
    return res
};