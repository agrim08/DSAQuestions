#leetcode 202
def isHappy(self, n: int) -> bool:
    visit = set()
    while n not in visit:
        visit.add(n)
        n = self.sumOfSqaure(n)
        if n == 1:
            return True
        
    return False
    
def sumOfSqaure(self,n:int):
    op = 0
    while n:
        digit = n % 10
        digit = digit ** 2
        op += digit
        n = n // 10
    
    return op