#leetcode 217

def containsDuplicate(nums):
        ans = set()
        for i in nums:
            if i in ans:
                return True
            else:
                ans.add(i)
        return False
        
nums = [1,3,2,1]
print(containsDuplicate(nums))