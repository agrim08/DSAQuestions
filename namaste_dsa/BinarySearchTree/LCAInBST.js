/**
 * Approach: BST Property Search.
 * Intuitively, in a BST, we can determine the path to nodes based on their values.
 * If both values are smaller than the current node, we move left; if larger, move right.
 * The first node where the values 'split' (or matching one of them) is the LCA.
 */
var lowestCommonAncestor = function(root, p, q) {
    if(p.val < root.val && q.val < root.val){
        return lowestCommonAncestor(root.left, p, q)
    }
    else if(p.val > root.val && q.val > root.val){
        return lowestCommonAncestor(root.right, p, q)
    }
    else{
        return root
    }
};