# task 1

def set_alarm(employed, vacation):
    if employed == True and vacation == False:
        return True
    elif employed == "True" and vacation == "True":
        return True
    else:
        return False
    
# task 2

def update_light(current):
    if current == "green": 
        return "yellow"
    elif current == "yellow":
        return "red"
    else:
        return "green"
    
# task 3

def whatday(num):
    dict = {
        1: "Sunday",
        2: "Monday",
        3: "Tuesday",
        4: "Wednesday",
        5: "Thursday",
        6: "Friday",
        7: "Saturday"
    }
    
    x = dict.get(num)
    
    if num in dict:
        return x
    else:
        return "Wrong, please enter a number between 1 and 7"

# task 4

def same_case(a, b):
    letters = ["a", "b", "c", "d", "e", 
               "f", "g", "h", "i", "j", "k", "l", "m", 
               "n", "o", "p", "q", "r", "s", "t", "u",
               "v", "w", "x", "y", "z"]
    letters1 = ["A", "B", "C", "D", "E", "F", "G", 
               "H", "I", "J", "K", "L", "M", "N", "O", 
               "P", "Q", "R", "S", "T", "U", "V", "W", 
               "X", "Y", "Z"]
    if a in letters and b in letters:
        return 1
    elif a in letters1 and b in letters1:
        return 1
    elif a in letters and b in letters1:
        return 0
    elif a in letters1 and b in letters:
        return 0
    else:
        return -1
    
# task 5

def count_positives_sum_negatives(arr):
    if not arr: 
        return []

    pos = 0
    neg = 0
    for i in arr:
        if i > 0:
            pos += 1
        if i < 0:
            neg += i
            
    return [pos, neg]

# task 6

def find_multiples(integer, limit):
    l = []
    for n in range(integer, limit+1, integer):
        l.append(n)
    return l