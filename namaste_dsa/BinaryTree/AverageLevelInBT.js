/**
 * Approach: Level-Order Traversal (BFS).
 * Intuitively, we use a queue to traverse the tree level by level. For each level,
 * we calculate the sum of all node values and divide it by the number of nodes
 * in that level to find the average.
 */
var averageOfLevels = function(root) {
    if (!root) return [];

    const result = [];
    const queue = [root];

    while (queue.length > 0) {
        let levelSize = queue.length;
        let sum = 0;

        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift();
            sum += node.val;

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        result.push(sum / levelSize); 
    }

    return result;

};