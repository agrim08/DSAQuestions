/**
 * Approach: Recursive Level Linking.
 * Intuitively, for a perfect binary tree, a node's left child always points to its right child.
 * Additionally, a node's right child points to its parent's next node's left child.
 * We establish these links recursively.
 */
var connect = function(root) {
    if(!root) return root

    let traverse = (curr) => {
        if(curr.left){
            curr.left.next = curr.right
        }

        if(curr.right && curr.next){
            curr.right.next = curr.next.left
        }

        curr.left && traverse(curr.left)
        curr.right && traverse(curr.right)
    }

    traverse(root)
    return root
};