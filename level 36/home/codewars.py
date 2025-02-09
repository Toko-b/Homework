# task 1

def solution(string):
    return string[::-1]

# task 2

def main(verb, noun):
    return verb + noun

#task 3

def area_or_perimeter(l , w):
    if l==w :
        return l * w
    else :
        return (l+w)*2

# task 4

def make_negative( number ):
    if number > 0:
        number = -number
    return number

# task 5

def opposite(number):
    if number > 0:
        return -number
    else:
        return -number * 1
    
def opposite(number):
    return -number if number > 0 else -number * 1