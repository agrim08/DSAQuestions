def sockMerchant(n, ar):
    # Write your code here
    count = []
    
    for i in set(ar):
        count.append(ar.count(i))
    
    return sum([j//2 for j in count])

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    n = int(input().strip())

    ar = list(map(int, input().rstrip().split()))

    result = sockMerchant(n, ar)

    fptr.write(str(result) + '\n')

    fptr.close()
