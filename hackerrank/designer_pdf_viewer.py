# method 1:
import sys

h = [int(h_temp) for h_temp in input().strip().split(' ')]
word = input().strip()
max_height = 0
for i in range (len(word)):
    num = ord(word[i])-97
    if (h[num] >= max_height):
        max_height = h[num]

area = len(word)*max_height
print(area)

# method 2
def designerPdfViewer(h, word):
    # Write your code here
    m = len(word)
    word.lower()
    arr = []
    # num = 0
    letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n',
    'o','p','q','r','s','t','u','v','w','x','y','z']
    for i in word:
        if (i in letters):
            num = letters.index(i)
            arr.append(h[num])
    maxi = max(arr)
    return m*maxi