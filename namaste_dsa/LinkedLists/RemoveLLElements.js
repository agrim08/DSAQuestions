/**
 * Approach: Sentinel Node (Dummy Head).
 * Intuitively, we use a dummy head to handle edge cases like removing the 
 * original head node. We traverse the list and skip any node that matches 
 * the target value.
 */
var removeElements = function(head, val) {
    let sentinel = new ListNode()
    sentinel.next = head
    let prev = sentinel

    while(prev && prev.next){
        if(prev.next.val === val){
            prev.next = prev.next.next
        }else{
            prev = prev.next
        }
    }

    return sentinel.next
};