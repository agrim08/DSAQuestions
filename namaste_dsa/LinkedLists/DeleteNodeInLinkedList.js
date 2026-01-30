/**
 * Approach: Value Overwriting.
 * Intuitively, since we don't have access to the previous node, we 'delete' 
 * the current node by copying the next node's value into it and then skipping 
 * over the next node.
 */
var deleteNode = function(node) { 
    node.val = node.next.val
    node.next = node.next.next 
};