#leetcode 876
#slow and fast algoritm:

def middleNode( head):
       slow = head
       fast = head

       while fast and fast.next:
            fast = fast.next.next
            slow = slow.next
       return slow
