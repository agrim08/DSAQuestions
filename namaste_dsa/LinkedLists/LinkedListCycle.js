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