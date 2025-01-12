#leetcode 66
def plusOne(digits: list[int]) -> List[int]:
        res = int("".join(map(str,digits)))
        return [int(num) for num in str(res+1)]