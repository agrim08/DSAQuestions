var isSymmetric = function(root) {
    let isMirror = (left, right) => {
        if(!left && !right) return true
        if(!left || !right) return false

        return left.val === right.val &&
                isMirror(left.right, right.left) &&
                isMirror(left.left, right.right)
    }

    return isMirror(root.left, root.right)
};


// for tree:-
//         1
//       /   \
//      2     2
//     / \   / \
//    3   4 4   3


// isMirror(2,2)
// ├── isMirror(4,4)
// │   ├── isMirror(null,null) → true
// │   └── isMirror(null,null) → true
// │   => true
// └── isMirror(3,3)
//     ├── isMirror(null,null) → true
//     └── isMirror(null,null) → true
//     => true
// => true