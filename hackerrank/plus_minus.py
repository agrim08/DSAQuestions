import math
import os
import random
import re
import sys

#
# Complete the 'plusMinus' function below.
#
# The function accepts INTEGER_ARRAY arr as parameter.
#

def plusMinus(arr):
    # Write your code here
    a = 0
    b = 0
    c = 0
    n = len(arr)
    for i in range(n):
        if arr[i] > 0:
            a +=1
        elif arr[i] < 0:
            b += 1
        else:
            c += 1
            
    r1 = round(a/n, 6)
    r2 = round(b/n , 6)
    r3 = round(c/n, 6)
    
    print(r1)
    print(r2)
    print(r3)
    

if __name__ == '__main__':
    n = int(input().strip())

    arr = list(map(int, input().rstrip().split()))

    plusMinus(arr)