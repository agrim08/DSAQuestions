var balanceBST = function(root) {
    const arr = []
    inOrder(root, arr)
    return buildBST(arr, 0, arr.length - 1)
};

let inOrder = (root, arr) => {
    if(!root) return null
    inOrder(root.left, arr)
    arr.push(root.val)
    inOrder(root.right, arr)
}

let buildBST = (arr, left, right) => {
    if(left > right) return null
    let mid = Math.floor((left + right) / 2)
    const node = new TreeNode(arr[mid])
    node.left = buildBST(arr, left, mid - 1)
    node.right = buildBST(arr, mid + 1, right)

    return node
}