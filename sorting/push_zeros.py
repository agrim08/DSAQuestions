def push_zero(arr):
    non_zero_elements = [x for x in arr if x != 0]
    zero_count = arr.count(0)
    return non_zero_elements + [0] * zero_count

arr = [1, 0, 4, 6, 0, 2, 4]
print(push_zero(arr))
