/**
 * Approach: Recursive BST Traversal.
 * Intuitively, we use the BST property: if the value is smaller, go left; if larger, go right.
 * We continue until we find an empty spot (null), where we insert the new node,
 * maintaining the structure of the tree.
 */
var insertIntoBST = function(root, val) {
    if(!root) return new TreeNode(val)

    if(root.val < val){
        root.right = insertIntoBST(root.right, val)
    }
    else{
        root.left = insertIntoBST(root.left, val)
    }

    return root
};