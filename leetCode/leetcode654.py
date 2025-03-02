#leetcode 654 Maximum Binary Tree

class TreeNode(object):
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution(object):
    def constructMaximumBinaryTree(self, nums):
        n = len(nums) - 1
        root = self.construct(nums, 0, n)
        return root

    def construct(self, arr, s, e):
        if s > e:
            return None
        if s == e:
            return TreeNode(arr[s])
        
        idx = self.findMax(arr, s, e)
        root = TreeNode(arr[idx])

        root.left = self.construct(arr,s,idx-1)
        root.right = self.construct(arr,idx + 1,e)

        return root

    def findMax(self, arr, s, e):
        max_idx = s
        for i in range(s, e + 1):
            if arr[i] > arr[max_idx]:
                max_idx = i
        return max_idx