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
# print(commonElement(arr1,arr2))
# TC: O(m+n)

# SOlUTION 2 (Language specific):
def commonElement2(arr1 , arr2):
    return set(arr1).intersection(arr2)

if commonElement2(arr1,arr2):
    print(True)
else:
    print(False)

def commonElement3(arr1,arr2):
    for i in arr1:
        if i in arr2:
            return True
    return False

print(commonElement3(arr1,arr2))


# In JAVASCRIPT:
# const commonElement4 = (arr1,arr2) => {
#     return arr1.some(item => arr2.includes(item))
# }

# console.log(commonElement3(arr1,arr2))