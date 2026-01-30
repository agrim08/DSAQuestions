//top-down approach

/**
 * Approach: DFS (Top-Down / Bottom-Up).
 * Intuitively, the depth of a tree is 1 plus the maximum depth of its children.
 * We can either pass depth down as a parameter or recursively aggregate the
 * maximum height from the leaves upward.
 */
var maxDepth = function(root) {
    if(!root) return 0
    let maxDepth = 0
    let traverse = (curr, depth) => {
        maxDepth = Math.max(maxDepth, depth)
        curr.left && traverse(curr.left, depth + 1)
        curr.right && traverse(curr.right, depth + 1)
    }
    traverse(root, 1)
    return maxDepth
};

//bottom-up approach
var maxDepthBU = function(root) {
    if(!root) return 0
    let leftMax = maxDepth(root.left)
    let rightMax = maxDepth(root.right)
    return 1 + Math.max(leftMax, rightMax)
};