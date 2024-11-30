#LEETCODE 367

def findValidSq(num):
    l = 1
    r = num
    
    while l < r:
        m = (l+r) // 2
        m_sq = m * m
        if(m_sq == num):
            return True
        elif m_sq < num:
            l = m + 1
        else:
            r = m - 1 
    return False