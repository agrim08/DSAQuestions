/**
 * Approach: Fast and Slow Pointers.
 * Intuitively, when the fast pointer (moving 2x speed) reaches the end of 
 * the list, the slow pointer (moving 1x speed) will be exactly at the middle node.
 */
function MiddleOfLL(){
    let slow = fast = head

    while(fast && fast.next){
        slow = slow.next
        fast = fast.next.next
    }

    return slow.val
}