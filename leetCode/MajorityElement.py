#leetcode 169

'''SOLUTION 1'''
def majorityElement(self, nums: List[int]) -> int:
        counter = {}
        for i in nums:
            if i in counter:
                counter[i] += 1
            else:
                counter[i] = 1
        
        count = -1
        ans = -1
        
        for key , val in counter.items():
            if val > count:
                count = val
                ans = key
        return ans

'''SOLUTION 2'''
def majorityElement(self, nums: List[int]) -> int:
        count = 0
        ans = -1

        for num in nums:
            if count == 0:
                ans = num

            if ans == num:
                count += 1
            else:
                count -= 1
        
        return ans