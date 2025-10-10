var kthSmallest = function(root, k) {
    let ans = null
    let count = k

    let traverse = (curr) => {
        if(ans) return 

        curr.left && traverse(curr.left)
        --count
        if(count == 0){
            ans = curr.val
        }

        curr.right && traverse(curr.right)
    }

    traverse(root)
    return ans
};