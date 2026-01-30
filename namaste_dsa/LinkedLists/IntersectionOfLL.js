/**
 * Approach: Hashing / Two Pointers.
 * Intuitively, an intersection node is the first node that is common to both 
 * lists. We can store all nodes of one list in a Set and then traverse the 
 * second list to find the first node that already exists in the Set.
 */
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