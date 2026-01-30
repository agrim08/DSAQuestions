/**
 * Approach: Linear Traversal with Lookahead.
 * Intuitively, since the list is sorted, duplicates are adjacent. We traverse 
 * the list and if the current node's value matches the next node's value, we 
 * skip the next node by re-linking.
 */
function removeDuplicate(head){
    let curr = head

    while(curr && curr.next){
        if(curr.val == curr.next.val){
            curr.next = curr.next.next
        }else{
            curr = curr.next
        }
    }
    return head
}