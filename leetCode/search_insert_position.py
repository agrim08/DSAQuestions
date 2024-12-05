# Leetcode 35

def searchInsert(nums, target):
        n = len(nums)
        l = 0
        r = n - 1

        while l <= r:
            m = (l + r) // 2
            if nums[m] == target:
                return m
            elif nums[m] < target:
                l = m + 1
            else: 
                r = m - 1
        
        if nums[m] < target:
            return m + 1
        else:
            return m 