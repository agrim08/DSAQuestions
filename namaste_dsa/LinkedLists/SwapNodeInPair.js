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