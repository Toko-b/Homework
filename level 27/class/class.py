# task 1
def multiply(a, b):
    return a * b

# task 2

def simple_multiplication(number) :
    if number % 2 == 0:
        return number * 8
    else:
        return number * 9

# task 3

def get_grade(s1, s2, s3):
    
    avg = (s1 + s2 + s3) / 3
    if 0 <= avg < 60:
        return "F"
    elif 90 <= avg <= 100:
        return 'A'
    elif 80 <= avg < 90:
        return 'B'
    elif 70 <= avg < 80:
        return 'C'
    else:
        return 'D'