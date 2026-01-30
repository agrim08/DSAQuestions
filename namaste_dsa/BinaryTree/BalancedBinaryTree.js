/**
 * Approach: DFS Depth Calculation.
 * Intuitively, a tree is balanced if the heights of its left and right subtrees
 * differ by no more than one. We recursively calculate heights and check this
 * condition at every node to ensure global balance.
 */
var isBalanced = function(root) {
    let ans = true
    let calcHeight = (curr) => {
        if(!curr) return 0
        let leftHeight = calcHeight(curr.left)
        let rightHeight = calcHeight(curr.right)
        if(Math.abs(leftHeight - rightHeight) > 1){
            ans = ans && false
        }

        return 1 + Math.max(leftHeight, rightHeight)
    }
    calcHeight(root)
    return ans
};