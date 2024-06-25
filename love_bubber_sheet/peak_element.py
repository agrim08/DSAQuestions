# return the index of peak element of array

def peakElement(arr, n):
        s = 0
        e = n-1
        while s < e:
            mid = s + (e-s)//2
            if arr[mid] > arr[mid + 1]:
                e = mid;
            else:
                s = mid + 1
        
        return s
    
A = [1,3,5,7,8,4,2,0]    
print(peakElement(A,8))