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