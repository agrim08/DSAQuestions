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