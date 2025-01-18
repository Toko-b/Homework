nums = [2,4,8,9,5]
# ვქმნით სიას რომელშიც შეგვაქვს 5 მნიშვნელობა

nums.insert(1, 3)
# პირველ ინდექსზე ვამატებთ რიცხვ სამს

nums.remove(9)
# შემდეგ სიიდან ამოგვაქვს რიცხვი 9 

nums.insert(0, nums.count(8))
# შემდეგ სიაში 0 ინდექსზე ვამატებთ სიაში მყოფი რვის რაოდენობას ამ შემთხვევაში 1-ს

print(nums[3])
# შემდეგ გამოგვაქვს მესამე ინდექსზე მყოფი მნიშვნელობა ამ სიაში პასუხი არის 4

# task 2
fruits = ["apple", "banana", "cherry", "date", "elderberry"]

print(fruits)

print(fruits[0])

print(fruits[4])

fruits.append("fig")

fruits.remove("banana")

fruits.insert(1, "blueberry")

print(len(fruits))

# task 3

numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90]

numbers.append(100)

numbers.insert(0, 5)

numbers.remove(30)

numbers.sort()

numbers.reverse()

numbers.index(50)

numbers.count(20)

# task 4

num = [1,2,3,4,5,6,7,8,9,10]

first_half = num[:5]

secont_half = num[5:]

square = []

for i in num:
    i = i + i
    square = i * i 

print(square)