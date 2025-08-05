var getIntersectionNode = function(headA, headB) {
    let s = new Set()

    while(headB){
        s.add(headB)
        headB = headB.next
    }

    while(headA){
        if(s.has(headA)){
            return headA
        }
        headA = headA.next
    }

    return null
};