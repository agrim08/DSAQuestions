#leetcode 504

def convertToBase7(self, num: int) -> str:
        if num == 0:
            return '0'
        
        org = num
        num = abs(num)

        rems = []

        while num > 0:
            rem = num % 7
            rems.append(str(rem))
            num = num // 7
        
        if org < 0:
            rems.append('-')
        
        rems.reverse()
        return ''.join(rems)