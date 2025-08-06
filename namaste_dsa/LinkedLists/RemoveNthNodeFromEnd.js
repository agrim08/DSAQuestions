//approach 1    two pass
var removeNthFromEnd = function(head, n) {
    let l = 0
    let sentinel = new ListNode()
    sentinel.next = head

    while(head){
        head = head.next
        l++
    }

    let prevPos = l - n
    let prev = sentinel

    for(let i = 0; i < prevPos; i++){
        prev = prev.next
    }
    prev.next = prev.next.next
    return sentinel.next
};

//approach 2    one pass
var removeNthFromEndonePass = function(head, n) {
    let sentinel = new ListNode()
    sentinel.next = head

    let p1 = p2 = sentinel

    for(let i = 0; i < n; i++){
        p2 = p2.next
    }

    while(p2.next){
        p1 = p1.next
        p2 = p2.next
    }

    p1.next = p1.next.next
    return sentinel.next
};