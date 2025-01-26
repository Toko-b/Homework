# task 1
def between(a,b):
    a_list = []
    for i in range(a, b +1):
        a_list.append(i)
    return(a_list)

# task 2

def solution(string):
    return string[::-1]

# task 3

def boolean_to_string(b):
    return str(b)

# task 4

def create_array(n):
    res=[]
    i = 1
    while i<=n: 
        res+=[i]
        i += 1
    return res

# task 5

def quarter_of(month):
    if 1 <= month <= 3:
        return 1
    elif 4 <= month <= 6:
        return 2
    elif 7 <= month <= 9:
        return 3
    else: 
        return 4