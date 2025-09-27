var isBalanced = function(root) {
    let ans = true
    let calcHeight = (curr) => {
        if(!curr) return 0
        let leftHeight = calcHeight(curr.left)
        let rightHeight = calcHeight(curr.right)
        if(Math.abs(leftHeight - rightHeight) > 1){
            ans = ans && false
        }

        return 1 + Math.max(leftHeight, rightHeight)
    }
    calcHeight(root)
    return ans
};