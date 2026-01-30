/**
 * Approach: Slow-Fast Pointer with Recursion.
 * Intuitively, we find the middle of the linked list using slow and fast pointers
 * to make it the root. We then split the list and recursively build the left
 * and right subtrees to ensure the BST remains balanced.
 */
var sortedListToBST = function(head) {
    if(!head) return null
    if(!head.next) return new TreeNode(head.val)

    let slow = head
    let fast = head
    let prev = null

    while(fast && fast.next){
        prev = slow
        slow = slow.next
        fast = fast.next.next
    }

    prev.next = null

    const root = new TreeNode(slow.val)

    root.left = sortedListToBST(head)
    root.right = sortedListToBST(slow.next)

    return root
};