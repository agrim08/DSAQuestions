#Find All Numbers Disappeared in an Array
def findDisappearedNumbers(self, nums: List[int]) -> List[int]:
        s = set()
        for i in range(1,len(nums) + 1):
            s.add(i)
        
        for num in nums:
            if num in s:
                s.remove(num)
        
        return list(s)