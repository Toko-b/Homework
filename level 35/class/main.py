# task 1

distance = 7425

speed = 550

time = distance / speed

print(str(time) + " hours")

print(f"La to Sydney. distance: {distance} miles, speed: {speed} miles an hour, time: {time} hours")

def la_sydney(distance, speed):
    time = distance / speed
    return f"La to Sydney. distance: {distance} miles, speed: {speed} miles an hour, time: {time} hours"

print(la_sydney(7425, 550))

# task 2

bill = int(input("Hello your total is: "))

tip = (bill / 100) * 20

print(tip)

def tipjar(bill):
    tip = (bill / 100) * 20
    return tip
    
print(tipjar(int(input("Hello your total is: "))))


# task 3

def bme(weight,height):
    bmi = weight / (height * height)
    if bmi < 18.5:
        return "underweight"
    elif bmi >= 18.5 and bmi < 25:
        return "normal"
    elif bmi > 25 and bmi < 30:
        return "overweight"
    else:
        return "Obisety"

print(bme(int(input("enter your weight: ")), float(input("enter your height: "))))

# task 4

def search(text,word):
    if word in text:
        return "Word found"
    else:
        return "Word not found"
    
print(search(input("enter a text: "), input("enter a word: ")))