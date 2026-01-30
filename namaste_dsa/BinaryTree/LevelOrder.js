/**
 * Approach: Level-Order Traversal (BFS).
 * Intuitively, we use a queue to process nodes layer by layer. For each depth,
 * we collect all node values into an array before moving on to the children,
 * resulting in a nested structure of level-by-level values.
 */
var levelOrder = function(root) {
    if(!root) return []
    let q = [root]
    let ans = []

    while(q.length){
        let lvlArr = []
        let lvlLength = q.length
        for(let i = 0; i < lvlLength; i++){
            let curr = q.shift()
            curr.left && q.push(curr.left)
            curr.right && q.push(curr.right)
            lvlArr.push(curr.val)
        }

        ans.push(lvlArr)
    }

    return ans
};