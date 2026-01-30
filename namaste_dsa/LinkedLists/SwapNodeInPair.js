/**
 * Approach: Iterative/Recursive Pair Swapping.
 * Intuitively, we process the list in chunks of two. For each pair, we 
 * adjust the pointers so that the second node points to the first, and the 
 * first points to the result of the next pair's swap.
 */
var swapPairs = function(head) {
    if(!head || !head.next) return head

    let dummy = new ListNode()
    dummy.next = head
    let prev = dummy
    let curr = head
    let N = head.next

    while(curr && N){
        prev.next = N
        curr.next = N.next
        N.next = curr

        prev = curr
        curr = prev.next
        N = curr && curr.next
    }

    return dummy.next
};

//recursive approach