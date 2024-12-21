# task 1

# task 1 was sololearn


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

# task 5

temperature = [72, 68, 75, 70, 78, 74, 71]

print(max(temperature))

print(min(temperature))

print(sum(temperature) // len(temperature))

above_70 = []

for i in temperature:
    if i > 70:
        above_70 += [i]

print(above_70)


