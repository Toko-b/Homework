# task 1
a = "code"
b = "wa.rs"
name = a + b

# task 2

def is_even(n): 
    if n % 2 == 0:
        return True
    else: 
        return False
    
# task 3

def main(verb, noun):
    return verb + noun

# task 4

def even_or_odd(number):
    if number % 2 == 0:
        return "Even"
    else:
        return "Odd"
    
# task 5

def number_to_string(num):
    return str(num)

# task 6

def boolean_to_string(b):
    #your code here
    return str(b)

# task 7

def say_hello(name):
    return "Hello, " + name

# task 8

def quarter_of(month):
    if 1 <= month <= 3:
        return 1
    elif 4 <= month <= 6:
        return 2
    elif 7 <= month <= 9:
        return 3
    else: return 4
    pass