
user_input = int(input("enter number : "))
user_input1 = int(input("enter number : "))
user_input2 = int(input("enter number : "))
user_input3 = int(input("enter number : "))

numbers = [user_input,user_input1, user_input2, user_input3]
sum = 0
for i in numbers:
    sum += i

print(sum)

# task 2

numbers = []

for i in range(15):
    user_input = int(input("enter number : "))
    numbers += [user_input]

print(len(numbers))