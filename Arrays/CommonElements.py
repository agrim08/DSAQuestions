# given 2 arrays, create a func that returns a boolean true if their are common elements else false.
#for example:
# array1 = ['a', 'b', 'c', 'x']
# array2 = ['z', 'y', 'i']
#should return false

# array1 = ['a', 'b', 'c', 'x']
# array2 = ['z', 'y', 'x']
#should return true

# arrays has no size limit

def commonElement(arr1 , arr2):
    map = {}
    for i in range(len(arr1)):
        item = arr1[i]
        map[item] = True
    print(map)
    
    for j in range(len(arr2)):
        if arr2[j] in map:
            return True
    return False


arr1 = ['a', 'b', 'c', 'x']
arr2 = ['z', 'y', 'x']
print(commonElement(arr1,arr2))