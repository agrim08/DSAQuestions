#leetcode 58

#solution 1 using extra space:
def lengthOfLastWord(self, s: str) -> int:
        s_str = s.strip()
        count = 0
        for i in range(len(s_str) - 1, -1, -1):
            if s_str[i] == " ":
                break
            else:
                count += 1
        
        return count

#solution 2 using in-place:
def lengthOfLastWord(self, s: str) -> int:
        i = len(s) - 1
        while i >= 0 and s[i] == ' ':
            i -= 1
        
        if i < 0:
            return 0
        
        count = 0
        while i >= 0 and s[i] != ' ':
            count += 1
            i -= 1
        
        return count
