def binary_search(arr,key):
    low = 0
    high = len(arr) - 1
    while (low <= high):
        mid = (low + high) // 2
        if (arr[mid] == key):
            return mid
        elif (arr[mid] < key):
            low = mid 
        else:
            high = mid 
    
    return -1
l = list.sort([237, 512, 89, 745, 321, 678, 444, 901, 123, 567, 888, 333, 654, 987, 111, 222, 777, 456, 789, 555])
print(binary_search(l,456))
# print(binary_search([1,2,3,4,5,6,67,88],6))