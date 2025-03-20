# task 1

def solution(text, ending):
    if text.endswith(ending):
        return True
    else:
        return False
    
# task 2

def basic_op(operator, value1, value2):
    sum = 0
    if operator == "+":
        sum = value1 + value2
        return sum
    elif operator == "-":
        sum = value1 - value2
        return sum
    elif operator == "*":
        sum = value1 * value2
        return sum
    elif operator == "/":
        sum = value1 / value2
        return sum
    
# task 3

def digitize(n):
    # we convert int to a string
    str_n = str(n)
    # then we split the string into an list
    l_1 = str_n.split()
    # we create a variable that turns string into a int using map wich converts string into a integer inside a list
    l = list(map(int, str_n))
    return l[::-1]

# task 4

def century(year):
    cent = 0
    if ((year // 10)%10) > 0:
        cent += year // 100 + 1
    elif ((year % 10) // 1) == 0:
        cent +=year // 100 
    else:
        cent += year // 100 + 1
    return cent

# task 5

def litres(time):
    litters = time // 2
    return litters
