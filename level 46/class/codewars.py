# task 1
def repeats(arr):
    sum_nums = 0
    for i in arr:
        if arr.count(i) == 1:
            sum_nums += i 
    return sum_nums

# task 2

def litres(time):
    litters = time // 2
    return litters

# task 3

def cat_mouse(x):
    for i in x:
        if x.count(".") > 3:
            return "Escaped!"
        else:
            return "Caught!"