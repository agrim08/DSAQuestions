/**
 * Approach: Recursive BST Search.
 * Intuitively, we use the BST property to skip half the tree at each step.
 * If the target is smaller than the current value, we move left; if larger,
 * we move right. We return the node once it matches the target.
 */
let ans = null
let traverse = (curr) => {
    if(curr.val == val){
        ans = curr
    }else{
        if(curr.val < val){
            curr.right && traverse(curr.right)
        }else{
            curr.left && traverse(curr.left)   
        }
    }
}

traverse(root)
return ans