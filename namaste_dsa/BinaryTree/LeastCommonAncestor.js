```javascript
/**
 * Approach: Recursive DFS with Target Counting.
 *
 * The Lowest Common Ancestor (LCA) is defined as the lowest node in a tree that has both 
 * nodes 'p' and 'q' as descendants (where we allow a node to be a descendant of itself).
 * 
 * This algorithm performs a post-order traversal (DFS) to count the occurrences of 
 * 'p' and 'q' in the subtrees. A node is the LCA if:
 * 1. Its left and right subtrees each contain one of the target nodes.
 * 2. The node itself is one of the targets, and one of its subtrees contains the other.
 *
 * By tracking the total count of targets found in each subtree, the first node 
 * where the combined count (left + right + current) equals 2 is identified as the LCA.
 */
```
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