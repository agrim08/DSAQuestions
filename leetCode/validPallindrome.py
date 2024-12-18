# leetcode 125

def isPalindrome( s):
    res = ''.join(c.lower() for c in s if c.isalnum())
    
    l = 0
    r = len(res) - 1

    # Check for palindrome
    while l < r:
        if res[l] != res[r]:
            return False
        l += 1
        r -= 1
        
    return True