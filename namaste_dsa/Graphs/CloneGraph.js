/**
 * Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */

var cloneGraph = function(node) {
    if (!node) return null

    let q = [node]
    let visited = new Map()
    let cloneRoot = new Node(node.val)
    visited.set(node, cloneRoot)

    while(q.length){
        let curr = q.shift()
        for(let n of curr.neighbors){
            if(!visited.has(n)){
                q.push(n)
                visited.set(n, new Node(n.val))
            }
            let currClone = visited.get(curr)
            currClone.neighbors.push(visited.get(n))
        }
    }
    return cloneRoot
};