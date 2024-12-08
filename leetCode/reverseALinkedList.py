# leetcode 206

def reverseList(head):
    cur = head
    prev = None

    while cur:
        temp = cur.next
        cur.next = prev
        prev = cur
        cur = temp
        
    return prev