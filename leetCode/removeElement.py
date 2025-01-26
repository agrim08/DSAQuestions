#leetcode 26
def removeElement(self, nums: List[int], val: int) -> int:
        l = 0
        n = len(nums)

        while l < n:
            if nums[l] == val:
                nums[l] = nums[n-1]
                n -= 1
            else:
                l += 1
        return n