class Solution(object):
    def toLowerCase(self, s):

        arr = list(s)
        for i in range(len(arr)):
            if arr[i].isupper():
                arr[i] = arr[i].lower()
        
        return "".join(arr)