/**
 * Approach: Iterative Re-linking.
 * Intuitively, we traverse the list and for each node, we point its `next` 
 * pointer to its previous node. We use a temporary variable to keep track 
 * of the original `next` node before overwriting it.
 */
function ReverseOfLL(){
    let curr = head
    let prev = null

    while(curr){
        let temp = curr.next
        curr.next = prev
        prev = curr
        curr = temp
    }
    return prev
}