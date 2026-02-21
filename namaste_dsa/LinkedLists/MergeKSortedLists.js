//brute force
var mergeKLists = function(lists) {
    if(!lists || lists.length === 0) return null

    let arr = []
    for(let i = 0; i < lists.length; i++){
        let temp = new ListNode
        temp = lists[i]

        while(temp !== null){
            arr.push(temp.val)
            temp = temp.next
        }
    }

    arr.sort((a, b) => a - b)

    let dummy = new ListNode(-1);
    let current = dummy;

    for (let val of arr) {
        current.next = new ListNode(val);
        current = current.next;
    }

    return dummy.next
};

//optimal
var mergeKLists = function(lists) {
    if (!lists || lists.length === 0) return null;

    // Helper function to merge two sorted lists
    let mergeTwoLists = (list1, list2) => {
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

    // Repeatedly merge lists
    let merged = lists[0];
    for (let i = 1; i < lists.length; i++) {
        merged = mergeTwoLists(merged, lists[i]);
    }

    return merged;
};


//optimal using divide and conqueror
var mergeKLists = function(lists) {
    if (!lists || lists.length === 0) return null;

    // Helper: merge two sorted lists
    const mergeTwoLists = (l1, l2) => {
        let dummy = new ListNode(-1);
        let curr = dummy;

        while (l1 && l2) {
            if (l1.val < l2.val) {
                curr.next = l1;
                l1 = l1.next;
            } else {
                curr.next = l2;
                l2 = l2.next;
            }
            curr = curr.next;
        }

        curr.next = l1 || l2;
        return dummy.next;
    };

    let interval = 1;

    //merging in pairs
    while (interval < lists.length) {
        for (let i = 0; i + interval < lists.length; i += interval * 2) {
            lists[i] = mergeTwoLists(lists[i], lists[i + interval]);
        }
        interval *= 2;
    }

    return lists[0];
};
