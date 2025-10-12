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