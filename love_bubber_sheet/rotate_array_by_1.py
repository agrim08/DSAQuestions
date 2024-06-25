# Method 1:

def rotate(arr):
    arr[:] = arr[-1:] + arr[:-1]
    return arr

arr = [1,2,3,4,5]
print(rotate(arr))

# method 2:

def rotate2(arr2,n):
        a = arr2[-1]
        for i in range(n-1,0,-1):
            arr2[i] = arr2[i-1]
            arr2[0] = a
        
        return arr2
    
arr2 = [1,2,3,4,5]
print(rotate2(arr2,5))
