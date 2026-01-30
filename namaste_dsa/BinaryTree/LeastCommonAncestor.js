/**
 * Approach: Recursive DFS Counting.
 * Intuitively, a node is the LCA if it has one target node in its left subtree
 * and another in its right, or if it is one target and has the other in a subtree.
 * We count target occurrences in subtrees to identify the split point.
 */
var lowestCommonAncestor = function(root, p, q) {
    let lca = null
    let traverse = (curr) => {
        let count = 0
        if(!curr) return 0
        let ansLeft = traverse(curr.left)
        let ansRight  = traverse(curr.right)

        if(curr.val === p.val || curr.val === q.val){
            ++count
        }

        count = count + ansLeft + ansRight

        if(count == 2 && !lca){
            lca = curr
        }
        return count
    }

    traverse(root)
    return lca
};