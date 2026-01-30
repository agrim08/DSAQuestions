/**
 * Approach: Recursive Swap.
 * Intuitively, inverting a tree means swapping the left and right children
 * of every node. We start at the root, swap its children, and then recursively
 * perform the same swap for all subtrees.
 */
var invertTree = function(root) {
    if(!root) return root

    let temp = root.left
    root.left = root.right
    root.right = temp

    invertTree(root.left)
    invertTree(root.right)

    return root
};