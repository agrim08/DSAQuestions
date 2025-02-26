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