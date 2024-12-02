#LEETCODE 13:

def roman_to_int(s):
    hash_map = {'I' : 1 , 'V' : 5, 'X' : 10, 'L' : 50, 'C' : 100, 'D' : 500, 'M' : 1000}
    
    i = 0
    n = len(s)
    sum = 0
    
    while i < n:
        if i < n - 1 and hash_map[s[i]] < hash_map[s[i+1]]:
            sum += hash_map[s[i+1]] - hash_map[s[i]]
            i += 2
        else:
            sum += hash_map[s[i]]
            i += 1

    return sum            