#leetcode 242

def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False
        
        s_counter = {}
        t_counter = {}

        for i in s:
            if i in s_counter:
                s_counter[i] += 1
            else:
                s_counter[i] = 1
        
        for i in t:
            if i in t_counter:
                t_counter[i] += 1
            else:
                t_counter[i] = 1

        return s_counter == t_counter