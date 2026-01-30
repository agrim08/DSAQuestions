/**
 * Approach: Single-Stack Iteration.
 * Intuitively, post-order is tricky because we must visit children before the root.
 * We use a stack and track the 'last visited' node to decide whether to process
 * the current node or move into its right subtree.
 */
var postorderTraversal = function(root) {
    let s = []
    let ans = []
    let curr = root
    let lv = null

    while(curr || s.length){
        while(curr){
            s.push(curr)
            curr = curr.left
        }

        let top = s[s.length - 1]
        if(top.right && top.right != lv){
            curr = top.right
        }else{
            ans.push(top.val)
            lv = s.pop()
        }
    }

    return ans
};