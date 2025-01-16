#leetcode 36
def isValidSudoku(board: List[List[str]]) -> bool:
        #valid row
        for i in range(9):
            s = set()
            for j in range(9):
                item = board[i][j]
                if item in s:
                    return False
                elif item != '.':
                    s.add(item)
        
        #valid col
        for i in range(9):
            s = set()
            for j in range(9):
                item = board[j][i]
                if item in s:
                    return False
                elif item != '.':
                    s.add(item)
        
        #valid box
        start = [(0, 0), (0, 3), (0, 6),
                (3, 0), (3, 3), (3, 6),
                (6, 0), (6, 3), (6, 6)]
        for i,j in start:
            s = set()
            for r in range(i,i+3):
                for col in range(j,j+3):
                    item = board[r][col]
                    if item in s:
                        return False
                    elif item != '.':
                        s.add(item)
        
        return True