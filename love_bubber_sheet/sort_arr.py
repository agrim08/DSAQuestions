def sort012(arr,n):
    cnt0 = 0
    cnt1 = 0
    cnt2 = 0
    
    for i in range(n):
        if arr[i] == 0:
            cnt0 += 1
        elif arr[i] == 1:
            cnt1 += 1
        elif arr[i] == 2:
            cnt2 += 1
    
    j = 0        
    while(cnt0 > 0):
        arr[j] = 0
        j+=1
        cnt0 -= 1
    
    while(cnt1 > 0):
        arr[j] = 1
        j+=1
        cnt1 -= 1

    while(cnt2 > 0):
        arr[j] = 2
        j+=1
        cnt2 -= 1
        
    return arr

arr = [0,2,1,0,1,1,2]
print(sort012(arr,7))