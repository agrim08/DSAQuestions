#leetcode 682:

def calPoints(self, operations):
        stk = []
        for i in operations:
            if i == "+":
                stk.append(stk[-1] + stk[-2])
            elif i == "C":
                stk.pop()
            elif i == "D":
                stk.append(2 * stk[-1])
            else:
                stk.append(int(i))
        return sum(stk)
