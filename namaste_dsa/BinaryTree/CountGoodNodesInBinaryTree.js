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