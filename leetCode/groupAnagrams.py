#leetcode 49

from collections import defaultdict

def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        anagrams_dict = defaultdict(list)
        for s in strs:
            count = [0] * 26
            for c in s:
                count[ord(c) - ord('a')] += 1 #ord returns the ascii code of the character
            
            key = tuple(count)
            anagrams_dict[key].append(s)
        
        return list(anagrams_dict.values())