# leetcode 278

def isBadversion(version):
    #given function
    pass

def firstBadVersion(n):
    l = 1
    r = n
    
    while l < r:
        m = ( l + r) // 2
        
        if isBadversion(m):
            r = m
        else:
            l = m + 1

    return l    
        