#method 1:
def revArr(arr,sI):
    if(sI >= len(arr)):
        return
    print(arr[-(sI + 1)])
    revArr(arr,sI+1)

revArr([2,3,5] , 0)

#method 2:
def revArr2(arr , sI):
    if(sI >= len(arr)):
        return
    revArr2(arr , sI + 1)
    print(arr[sI])

revArr2([2,3,4] , 0)