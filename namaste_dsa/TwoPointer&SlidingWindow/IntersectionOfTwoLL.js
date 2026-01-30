/**
 * Approach: Two Pointers (Gap Bridging).
 * Intuitively, we calculate the lengths of both lists. We advance the 
 * pointer of the longer list by the difference in lengths so that both 
 * pointers are equidistant from the end. Then we move both until they meet.
 */
//Approach 1
var getIntersectionNode = function(headA, headB) {
    let n = 0
    let pA = headA

    while(pA){
        ++n
        pA = pA.next
    }

    let m = 0
    let pB = headB

    while(pB){
        ++m
        pB = pB.next
    }

    let diff = Math.abs(n - m)

    if(n > m){
        temp = headA
        headA = headB
        headB = temp
    }

    for(let i = 0; i < diff; i++){
        headB = headB.next
    }

    pA = headA
    pB = headB

    while(pA != pB){
        pA = pA.next
        pB = pB.next
    }

    return pA
};


//Approach 2
var getIntersectionNode = function(headA, headB) {
    let pA = headA
    let pB = headB

    while(pA != pB){
        pA = pA == null ? headA : pA.next
        pB = pB == null ? headB : pB.next
    }

    return pA
};