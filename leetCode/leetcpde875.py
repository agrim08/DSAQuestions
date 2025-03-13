#koko eating bananas

import math

def minEatingSpeed(self, piles, h):
        low = 1
        high = max(piles)

        while low <= high:
            mid = (high + low) // 2
            totalH = self.findReqHour(piles, mid)  

            if totalH <= h:
                high = mid - 1 
            else:
                low = mid + 1  

        return low  
    
def findReqHour(self, piles, k):
        totalHour = 0
        for bananas in piles:
            totalHour += math.ceil(bananas / float(k)) 
        
        return totalHour
