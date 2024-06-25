# first sort array then print k-1th element

def KthSmallest(A,k):
    
    if len(A) == 1:
        return A[0]
    
    A.sort()
    print(A[k-1])

A = [9,55,0,44,101]
KthSmallest(A,3)
