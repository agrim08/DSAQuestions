# move ve- elements to biginning and ve+ to end

# method1:
def moveNeg(arr,n):
    j = 0
    for i in range(0,n):
        if arr[i] < 0:
            temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp
            
            j+= 1
            
    return arr

arr = [2,-3,4,5,6,-7,8,0]
print(moveNeg(arr,8))

# method 2
def moveNeg2(arr,n):
    low,high = 0, n-1
    while(low < high):
        if arr[low] < 0:
            low +=1
        elif arr[high] > 0:
            high -= 1
        else:
            arr[low] , arr[high] = arr[high] , arr[low]
            
    return arr

arr2 = [1,2,-4,-5,2,-7,3,2,-6,-9,-8,3,2,1]
print(moveNeg2(arr2,14))
            
