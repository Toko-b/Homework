# task 1
def open_or_senior(data):
    list = []
    for i,b in data:
        if i >= 55 and b > 7:
            list.append("Senior")
        else:
            list.append("Open")
    return list   

# task 2

def find_next_square(sq):
    root = sq ** 0.5;
    if root.is_integer():
        return (root +1) **2;
    else:
        return -1
    
# task 3

def row_sum_odd_numbers(n):
    sum = 0
    first = n * (n - 1) + 1
    for i in range(n):
        sum += first
        first += 2
    return sum

# task 4
def nb_year(p0, percent, aug, p):
    n = 0
    while p0 < p:
        p0 = p0 + int(p0*(percent / 100)) + aug
        n += 1
    if p0 >= p:
        return n
    return n

# task 5

def printer_error(s):
    err = 0;
    
    for i in s:
        if i < 'a' or i > 'm':
            err += 1;

    return f"{err}/{len(s)}"