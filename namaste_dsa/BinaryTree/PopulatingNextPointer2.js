/**
 * Approach: Level-Order with Dummy Header.
 * Intuitively, since the tree may not be perfect, we use a dummy node to track the
 * start of each level. While traversing the current level, we link all children
 * to form the next level's chain without extra space.
 */
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