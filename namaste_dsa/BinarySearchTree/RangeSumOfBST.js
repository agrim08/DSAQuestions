/**
 * Approach: Pruned DFS.
 * Intuitively, we traverse the tree but only explore branches that could contain
 * values in the range `[low, high]`. We add the current node's value if it's within
 * bounds and recursively visit valid subtrees.
 */
var rangeSumBST = function(root, low, high) {
    let sum = 0
    let traverse = (curr) => {
        if(!curr) return 

        if (curr.val > low) {
            traverse(curr.left);
        }

        if(curr.val >= low && curr.val <= high){
            sum += curr.val
        }

        if (curr.val < high) {
            traverse(curr.right);
        }
    }

    traverse(root)
    return sum
};