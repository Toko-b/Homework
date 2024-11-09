name = "tornike"
age = 13
num = 3.4
bulioni = True

print(type(name))
print(type(age))
print(type(num))
print(type(bulioni))

# >
print(4 > 3)
print(5 > 7)
print(3 > 5)
print(76 > 54)
print(64 > 42)

# <
print(34 < 31)
print(65 < 23)
print(76 < 43)
print(65 < 65)
print(86 < 76)
 
# >=
print(34>=23)
print(43 >= 43)
print(32 >= 12)
print(6 >= 7)
print(9 >= 43)

# <=
print(98 <= 100)
print(65 <= 65)
print(54 <= 34)
print(86 <= 86)
print(45 <= 43)

# ==
print(43==43)
print(54==54)
print(34 == 54)
print(87 == 56)
print(6 == 5)

# !=
print(54 != 534)
print(3 != 3)
print(54 != 53)
print(42 != 53)
print(867 != 5)

# and
x = 9
print(x == 9 and x <= 10 )
print(x > 4 and x < 4)
print(x <=54 and x == 54)
print(x < 8 and x != 7 )
print(x <= 8 and x >= 8)
#or
x = 43
print(x > 42 or x < 42)
print(x == 43 or x == 47)
print(x <= 32 or x >= 53)
print(x == 34 or x != 34)
print(x == 27 or x > 27)

# user

age = input()
print(type(age))

age = int(input())
print(type(age))

age = float(input())
print(type(age))

name = input()
password = input()

print(name == name)
print(password == password)

# კონკატინაცია არის როდესაც ორ string -ს გავაერთიანებთ და წარმოვქმნით ახალ string -ს.