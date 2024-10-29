# Problem 2239

def findClosestNumber( nums):
    
    closest = nums[0]
    for i  in nums:
        if abs(i) < abs(closest):
            closest = i
    
    if closest < 0 and abs(closest) in nums:
        return abs(closest)
    else: return closest


nums = [1,-1,4,-9,5,-4,7,-2]
print(findClosestNumber(nums))
