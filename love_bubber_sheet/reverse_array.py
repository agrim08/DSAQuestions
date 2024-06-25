# method 1: slicing
def reverse(s):
    k = s[::-1]
    print(k)
    return k

reverse("geeks")

# method 2: reverse()
def reverseUsingInbuilt(s):
    l = list(s)
    l.reverse()
    print("".join(l))
    return l

reverseUsingInbuilt("Agrim")