/**
 * Approach: DFS with Max Tracking.
 * Intuitively, a node is 'good' if it's the largest value seen on the path from the root.
 * We keep track of the maximum value encountered so far during traversal and
 * increment our count whenever the current node meets or exceeds it.
 */
var goodNodes = function(root) {
    let ans = 0

    let traverse = (curr, maxNow) => {
        if(curr.val >= maxNow){
            ans++
            maxNow = curr.val
        }
        // currMax = Math.max(maxNow, curr.val)
        curr.left && traverse(curr.left, maxNow)
        curr.right && traverse(curr.right, maxNow)
    }

    traverse(root, -Infinity)
    return ans
};