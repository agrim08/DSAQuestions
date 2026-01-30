/**
 * Approach: DFS height summation.
 * Intuitively, the diameter passing through a node is the sum of the heights
 * of its left and right subtrees. We calculate the height of each subtree
 * while simultaneously updating the maximum diameter found so far.
 */
var diameterOfBinaryTree = function(root) {
    let maxDiameter = 0
    let findDepth = (curr) => {
        if(!curr) return 0

        let leftMax = findDepth(curr.left)
        let rightMax = findDepth(curr.right)
        let currDiameter = leftMax + rightMax
        maxDiameter = Math.max(maxDiameter, currDiameter)        

        return 1 + Math.max(leftMax, rightMax)
    }
    findDepth(root)
    return maxDiameter
};