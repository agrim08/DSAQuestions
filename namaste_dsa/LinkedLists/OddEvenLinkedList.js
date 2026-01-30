/**
 * Approach: Linked List Re-linking.
 * Intuitively, we separate the list into two chains: one for nodes at odd 
 * positions and another for even positions. After traversing the whole list, 
 * we connect the end of the odd chain to the start of the even chain.
 */
var oddEvenList = function(head) {
    if(!head || !head.next) return head
    let odd = head
    let even = head.next
    let evenStart = head.next

    while(odd.next && even.next){
        odd.next = odd.next.next
        even.next = even.next.next
        odd = odd.next
        even = even.next
    }
    odd.next = evenStart
    return head
};