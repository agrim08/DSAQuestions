#recursive solution

def inorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
        ans = []
        
        def inorder(root):
            if not root:
                return
            
            inorder(root.left)
            ans.append(root.val)
            inorder(root.right)
        
        inorder(root)
        return ans


#Iterative solution
def inorderTraversalIterative(self, root: Optional[TreeNode]) -> List[int]:
        ans = []
        stack = []
        cur = root

        while cur or stack:
            while cur:
                stack.append(cur)
                cur = cur.left
            
            cur = stack.pop()
            ans.append(cur.val)
            cur = cur.right
        
        return ans