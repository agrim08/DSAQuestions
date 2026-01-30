/**
 * Approach: In-Order Traversal.
 * Intuitively, an in-order traversal of a BST visits nodes in strictly increasing order.
 * We keep a counter while traversing and stop as soon as we reach the `k-th` node,
 * capturing its value as our answer.
 */
var kthSmallest = function(root, k) {
    let ans = null
    let count = k

    let traverse = (curr) => {
        if(ans) return 

        curr.left && traverse(curr.left)
        --count
        if(count == 0){
            ans = curr.val
        }

        curr.right && traverse(curr.right)
    }

    traverse(root)
    return ans
};