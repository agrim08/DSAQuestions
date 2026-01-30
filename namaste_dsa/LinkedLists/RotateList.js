/**
 * Approach: Cyclic Re-linking.
 * Intuitively, we close the list into a circle and then break it at the 
 * appropriate point. The new tail is at position `(length - k % length)` 
 * from the start, and its `next` node becomes the new head.
 */
var rotateRight = function(head, k) {
    if(!head || !head.next) return head

    let length = 0
    let curr = head

    while(curr){
        curr = curr.next
        length++
    }

    k = k % length

    let slow = head
    let fast = head

    for(let i = 0; i < k; i++){
        fast = fast.next
    }

    while(fast.next){
        slow = slow.next
        fast = fast.next
    }

    fast.next = head
    let newHead = slow.next
    slow.next = null

    return newHead
};