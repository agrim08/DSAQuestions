/**
 * Approach: Reverse Second Half and Compare.
 * Intuitively, we find the middle of the list, reverse the second half, and 
 * then compare it with the first half. If all values match, the list is a palindrome.
 */
function PalindromeLL(head){
    //middle of LL
    let slow = fast = head
    while(fast && fast.next){
        slow = slow.next
        fast = fast.next.next
    }

    //reverse 2nd half
    let prev = null
    let curr = slow
    while(curr){
        let temp = curr.next
        curr.next = prev
        prev = curr
        curr = temp
    }

    //compare start and end
    let start = head
    let end = prev

    while(end){
        if(start.val != end.val){
            return false
        }
        start = start.next
        end = end.next
    }
    return true
}