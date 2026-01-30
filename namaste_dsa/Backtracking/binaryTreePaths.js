/**
 * Approach: Backtracking / DFS.
 * Intuitively, we traverse the tree from root to leaf, maintaining the current path.
 * When a leaf is reached, we store the full path. We backtrack by removing the node
 * from the current path to explore other branches.
 */
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