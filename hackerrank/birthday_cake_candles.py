import math
import os
import random
import re
import sys

def birthdayCakeCandles(candles):
    maxi = max(candles)
    n = len(candles)
    c = 1
    candles.remove(maxi)
    for i in range(n-1):
        if candles[i] == maxi:
            c +=1
    return c

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    candles_count = int(input().strip())
    candles = list(map(int, input().rstrip().split()))
    result = birthdayCakeCandles(candles)
    fptr.write(str(result) + '\n')
    fptr.close()
