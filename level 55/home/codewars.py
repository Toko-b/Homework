# task 1
def small_enough(array, limit):
    if max(array) <= limit:
        return True
    else:
        return False
    
# task 2

def sum_two_smallest_numbers(numbers):
    sorted1 = sorted(numbers)
    sum = sorted1[0] + sorted1[1]
    return sum

# task 3

def is_square(n):
    if n < 0:
        return False
    square_root = n ** 0.5
    
    num = int(square_root)
    
    if num*num == n:
        return True
    else:
        return False
    
# task 4

def password(st):
    upper = False
    lower = False
    number = False
    if st == '':
        return False
    for i, char in enumerate(st):
        if char.isupper():
            upper = True
        elif char.islower():
            lower = True
        elif char.isnumeric():
            number = True
    if i >= 7 and (upper == True) and (lower == True) and (number == True):
        return True
    return False

# task 5

def get_size(w,h,d):
    area = w * h * d
    volume = (d*w*2) + (d*h*2) + (w*h*2)
    both = [volume, area]
    return both