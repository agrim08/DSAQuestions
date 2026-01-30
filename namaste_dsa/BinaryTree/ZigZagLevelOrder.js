/**
 * Approach: Level-Order with Directional Toggle.
 * Intuitively, we perform a standard level-order traversal (BFS). For every 
 * even level, we append values normally, and for odd levels, we prepend 
 * them (or reverse the array) to achieve the zigzag effect.
 */
var zigzagLevelOrder = function(root) {
    if(!root) return []

    let ans = []
    let level = 0
    let q = [root]

    while(q.length){
        let levelArr = []
        let levelSize = q.length

        for(let i = 0; i < levelSize; i++){
            curr = q.shift()
            if(level % 2 == 0){
                levelArr.push(curr.val)
            }else{
                levelArr.unshift(curr.val)
            }
            curr.left && q.push(curr.left)
            curr.right && q.push(curr.right)
        }
        ans.push(levelArr)
        level++
    }

    return ans
};