var insertionSortList = function(head) {
    let dummy = new ListNode(10000)

    while(head){
        let temp = dummy
        let nextNode = head.next

        while(temp.next && temp.next.val < head.val){
            temp = temp.next
        }

        head.next = temp.next
        temp.next = head
        head = nextNode
    }

    return dummy.next
};