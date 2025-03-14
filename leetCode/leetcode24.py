#swap nodes is pair

def swapPairs(self, head):
    dummy = ListNode(0)
    dummy.next = head
    pointer = dummy
    while(pointer.next != None and pointer.next.next != None):
        swap1 = pointer.next
        swap2 = pointer.next.next
        swap1.next = swap2.next
        swap2.next = swap1
        pointer.next = swap2
        pointer = swap1

    return dummy.next