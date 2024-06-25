#!/bin/python3

import math
import os
import random
import re
import sys

#
# Complete the 'dayOfProgrammer' function below.
#
# The function is expected to return a STRING.
# The function accepts INTEGER year as parameter.
#

def dayOfProgrammer(year):
    # Write your code here
    if  year < 1919 and year != 1918:
        if year % 4 == 0:
             return (f"12.09.{year}")
        else:
            return (f"13.09.{year}")
    
    elif year == 1918:
        return (f"26.09.{year}")
        
            
    else:
        import calendar
        if(calendar.isleap(year)):
            return (f"12.09.{year}")
        else:
            return (f"13.09.{year}")
        
        

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    year = int(input().strip())

    result = dayOfProgrammer(year)

    fptr.write(result + '\n')

    fptr.close()
