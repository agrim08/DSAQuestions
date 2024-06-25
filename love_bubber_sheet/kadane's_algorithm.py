def maxSubArraySum(arr,n):
    maxi = arr[0]
    c_max = arr[0]
    for i in range(1,n):
        c_max = max(arr[i],c_max + arr[i])
        maxi = max(maxi, c_max)
        
    return maxi

arr = [1,2,-99,0,5,8,-1,9]
print(maxSubArraySum(arr,len(arr)))