/**
 * Approach: DFS with Accumulation.
 * Intuitively, we traverse from root to leaf, subtracting the current node's value
 * from the target sum. If we reach a leaf and the remaining sum matches the
 * leaf's value (or reaches zero), a valid path exists.
 */
var hasPathSum = function(root, targetSum) {
    if(!root) return false
    let ans = false
    let traverse = (curr, currSum) => {
        let sum = currSum + curr.val
        if(!curr.left && !curr.right){
            if(sum == targetSum){
                ans = ans || true
            }
        }

        curr.left && traverse(curr.left, sum)
        curr.right && traverse(curr.right, sum)
    }

    traverse(root, 0)
    return ans
};