/**
 * Approach: Recursive Overlapping.
 * Intuitively, we merge two trees by adding their overlapping node values.
 * If a node exists in only one tree, that subtree becomes part of the merged result;
 * otherwise, we recursively merge left and right children.
 */
var mergeTrees = function(t1, t2) {
    if(!t1) return t2
    if(!t2) return t1

    t1.val += t2.val

    t1.left = mergeTrees(t1.left, t2.left)
    t1.right = mergeTrees(t1.right, t2.right)

    return t1
};