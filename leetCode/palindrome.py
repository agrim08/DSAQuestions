#leetcode 9

def isPalindrome(x):
    arr = [dig for dig in str(x)]
    l = 0
    r = len(arr) - 1
    while l < r:
        if arr[l] != arr[r]:
            return False
            
        l += 1
        r -= 1
    return True

#solution 2:
def isPalindrome2(x):
    # Negative numbers and numbers ending with 0 (except 0 itself) cannot be palindromes
    if x < 0 or (x % 10 == 0 and x != 0):
        return False

    reversed_half = 0
    while x > reversed_half:
        reversed_half = reversed_half * 10 + x % 10
        x //= 10

    # Check if the first half and reversed second half match
    # For odd-length numbers, the middle digit doesn't matter (reversed_half // 10)
    return x == reversed_half or x == reversed_half // 10
