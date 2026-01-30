"""
Approach: Character Normalization.
Intuitively, we iterate through each character of the string. If we encounter 
an uppercase letter, we convert it to its lowercase equivalent using built-in 
string methods or ASCII manipulation.
"""
class Solution(object):
    def toLowerCase(self, s):

        arr = list(s)
        for i in range(len(arr)):
            if arr[i].isupper():
                arr[i] = arr[i].lower()
        
        return "".join(arr)