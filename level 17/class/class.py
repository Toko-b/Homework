yes = ["hello", 6, 6.5, True, False, "buski", "teacher", "ferrari", "python", "html"]

print(yes[0])
print(yes[1])
print(yes[2])

yes[3] = "linux"
yes[4] = "javascript"
yes[5] = "css"

print(yes[3])
print(yes[4])
print(yes[5])
print(yes[6])
print(yes[7])
print(yes[8])
print(yes[9])

yes += ["ruby"]
yes += ["rust"]
yes += ["java"]
yes += ["SQL"]
yes += ["C++"]

print(yes[10])
print(yes[11])
print(yes[12])
print(yes[13])
print(yes[14])

print(yes)

# task 2

num1 = int(input("enter a number for a list "))
num2 = int(input("enter a number for a list "))
num3 = int(input("enter a number for a list "))
num4 = int(input("enter a number for a list "))
num5 = int(input("enter a number for a list "))


user_numbers = [num1, num2, num3, num4, num5]

if num1 > 10 or num2 > 10 or num3 > 10 or num4 > 10 or num5 > 10:
    print("სიაში არის 10-ზე მეტი რიცხვი")
else:
    print("სიაში 10-ზე მეტი რიცხვი არ არის")

sum = 0

for i in user_numbers:
    sum += i

print(user_numbers)
print(sum)