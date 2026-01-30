/**
 * Approach: Floyd's Tortoise and Hare / Hashing.
 * Intuitively, a cycle exists if we revisit a node. We use two pointers moving 
 * at different speeds; if there is a cycle, the fast pointer will eventually 
 * "lap" the slow pointer and they will meet.
 */
//approach 1
var hasCycle = function(head) {
    const s = new Set()
    let curr = head

    while(curr){
        if(s.has(curr)){
            return true
        }
        s.add(curr)
        curr = curr.next
    }
    return false
};

//approach 2
var hasCycleOptimized = function(head) {
    let slow = fast = head

    while(fast && fast.next){
        slow = slow.next
        fast = fast.next.next

        if(slow == fast){
            return true
        }
    }
    return false
};