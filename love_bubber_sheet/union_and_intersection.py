# Methid 1
def findUnion(a,b):
    a = set(a)
    b = set(b)
    c = a.union(b)
    return len(c)

a = [1,2,3,4,5]
b = [3,4,5,6,7]
print(findUnion(a,b))

# Method 2
def findUnion2(x,y,n,m):
    s = set()
    for i in range(0,n):
        s.add(x[i])
        
    for i in range(0,m):
        s.add(y[i])
        
    return len(s)

print(findUnion2(a,b,5,5))


