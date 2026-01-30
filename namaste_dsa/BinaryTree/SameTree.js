/**
 * Approach: Recursive Comparison.
 * Intuitively, two trees are identical if their roots have the same value and their
 * corresponding left and right subtrees are also identical. We check this base case
 * and recurse through both trees simultaneously.
 */
var isSameTree = function(p, q) {
    if(!p && !q) return true
    if(!p || !q) return false

    return p.val === q.val &&
        isSameTree(p.left, q.left) && 
        isSameTree(p.right, q.right)
};