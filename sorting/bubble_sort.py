def bubble_sort(arr):
    n = len(arr)
    for i in range(n-1):
        for j in range(n-i-1):
            if(arr[j] > arr[j+1]):
                arr[j],arr[j+1] = arr[j+1],arr[j]
    return arr

arr = [5,1,2,4,3]
arr2 = [44,11,-2,6,99,-66,4,5,33,8676,38762,4,87234]
print(bubble_sort(arr))
print(bubble_sort(arr2))

'''OPTIMIZED BUBBLE SORT(best case tc = O(n))'''
def opt_bs(arr):
    m = len(arr)
    for i in range(m-1):
        Flag = True
        for j in range(m-i-1):
            if(arr[j] > arr[j+1]):
                Flag = False
                arr[j],arr[j+1] = arr[j+1],arr[j]
        if Flag:
            break
    
    return arr