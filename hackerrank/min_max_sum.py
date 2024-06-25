#!/bin/python3

import math
import os
import random
import re
import sys

#
# Complete the 'miniMaxSum' function below.
#
# The function accepts INTEGER_ARRAY arr as parameter.
#

def miniMaxSum(arr):
    # Write your code here
    maxi = max(arr)
    mini = min(arr)
    
    arr.remove(maxi)
    sum_min = sum(arr)
    
    arr.remove(mini)
    arr.append(maxi)
    sum_max = sum(arr)
    
    print(sum_min, sum_max)

if __name__ == '__main__':

    arr = list(map(int, input().rstrip().split()))

    miniMaxSum(arr)
