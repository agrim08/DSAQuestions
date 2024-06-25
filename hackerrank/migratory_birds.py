#!/bin/python3

import math
import os
import random
import re
import sys

#
# Complete the 'migratoryBirds' function below.
#
# The function is expected to return an INTEGER.
# The function accepts INTEGER_ARRAY arr as parameter.
#

def migratoryBirds(arr):
    
    # method 1: here tle occur
    
    # arr.sort()
    # counter = 0
    # num = arr[0]
    # for i in arr:
    #     cur_frq = arr.count(i)
    #     if cur_frq > counter:
    #         counter = cur_frq
    #         num = i
    # return num
    
    # method 2:
    arr.sort()
    from collections import Counter
    occ_count = Counter(arr)
    return occ_count.most_common(1)[0][0]
    
    # method 3:
    
    arr.sort()
    # import statistics
    # from statistics import mode
    # return mode(arr)

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    arr_count = int(input().strip())

    arr = list(map(int, input().rstrip().split()))

    result = migratoryBirds(arr)

    fptr.write(str(result) + '\n')

    fptr.close()
