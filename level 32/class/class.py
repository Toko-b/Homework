# task 1
def make_negative( number ):
    if number > 0:
        number = -number
    return number

# task 2

def say_hello(name):
    return f"Hello, {name}"

def say_hello(name):
    return "Hello, " + name

def say_hello(name):
    fixed_name = f"Hello, {name}"
    return fixed_name

def say_hello(name):
    return "Hello, {0}".format(name)

# task 3

def switch_it_up(number):
    if number == 1:
        return "One"
    elif number == 2:
        return "Two"
    elif number == 3:
        return "Three"
    elif number == 4:
        return "Four"
    elif number == 5:
        return "Five"
    elif number == 6:
        return "Six"
    elif number == 7:
        return "Seven"
    elif number == 8:
        return "Eight"
    elif number == 9:
        return "Nine"
    elif number == 0:
        return "Zero"

def switch(num):
    words = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"]
    return words[num]

# task 4

def between(a,b):
    a_list = []
    for i in range(a, b +1):
        a_list.append(i)
    return(a_list)