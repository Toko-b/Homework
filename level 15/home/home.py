# task 1

num = 2
even = 0
count = 0

while num <= 100:
    count = num
    even += 1
    num += 2

arithmetic = even//count

print(arithmetic)

# task 2

user_input = int(input("please enter a number : "))

if user_input < 0:
    print("your number is negative")
elif user_input == 0:
    print("your number equals to zero")
else:
    print("your number is positive")


# task 3

year = int(input("please enter a year: "))
if (year % 4 == 0 and year % 100 != 0) or year % 400 == 0:
    print("this is a leap year")
else :
    print("this is normal year")

# task 4

score = int(input("enter your test score: "))

if score >= 90:
    print("you get A")
elif score >= 80:
    print("you get B")
elif score >= 70:
    print("you get C")
else:
    print("you get D")

