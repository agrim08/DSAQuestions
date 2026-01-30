//brute force
/**
 * Approach: Brute Force Comparison / Serialization.
 * Intuitively, a tree is a subtree if it matches the current tree or exists within
 * any of its subtrees. We either compare every node using `isSameTree` or
 * serialize both trees and check for substring containment.
 */
var isSubtree = function(root, subRoot) {
    if(!root) return false

    if(isSameTree(root, subRoot)) return true
    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot)

};

var isSameTree = function(p, q) {
        if(!p && !q) return true
        if(!p || !q) return false

    return p.val === q.val &&
        isSameTree(p.left, q.left) && 
        isSameTree(p.right, q.right)
};

//-----------------------------------------*---------------------------------------//

//better approach
var isSubtree = function(root, subRoot) {
    let hashRoot = serialize(root)
    let hashSubRoot = serialize(subRoot)

    return hashRoot.includes(hashSubRoot)

};
//serialization of tree (important)
let serialize = (root) => {
    let hash = ""
    let traverse = (curr) => {
        if(!curr){
            hash = hash + "-#"
            return
        }
        hash = hash + "-" + curr.val;
        traverse(curr.left)
        traverse(curr.right)
    }

    traverse(root)
    return hash    
}