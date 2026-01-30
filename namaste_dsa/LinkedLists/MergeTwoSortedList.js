/**
 * Approach: Iterative Two-Pointer Merge.
 * Intuitively, we compare the heads of both sorted lists and pick the smaller 
 * one to append to our new list. We repeat this until one list is exhausted, 
 * then append the remainder of the other list.
 */
var mergeTwoLists = function(list1, list2) {
    if(!list1) return list2
    if(!list2) return list1

    let start = new ListNode()
    let curr = start

    while(list1 && list2){
        if(list1.val < list2.val){
            curr.next = list1
            list1 = list1.next
        }else{
            curr.next = list2
            list2 = list2.next
        }

        curr = curr.next
    }
    !list1 ? curr.next = list2 : curr.next = list1

    return start.next
};