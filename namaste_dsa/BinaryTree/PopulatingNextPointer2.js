var connect = function(root) {
    if (!root) return null;

    let curr = root;

    while(curr){
        let dummy = new Node(0)
        let temp = dummy

        while(curr){
            if(curr.left != null){
                temp.next = curr.left
                temp = temp.next
            }
            if(curr.right != null){
                temp.next = curr.right
                temp = temp.next
            }
            curr = curr.next
        }
        curr = dummy.next
    }
    return root
};