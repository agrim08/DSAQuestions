/**
 * Approach: Iterative Insertion.
 * Intuitively, we maintain a sorted portion of the list (starting with a dummy).
 * For each node in the original list, we find its correct position in the 
 * sorted part and insert it there, effectively building the sorted list node by node.
 */
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