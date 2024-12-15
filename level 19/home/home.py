name1 = input("please enter a integer,string,boolean or float for a list: ")
name2 = input("please enter a integer,string,boolean or float for a list: ")
name3 = input("please enter a integer,string,boolean or float for a list: ")
name4 = input("please enter a integer,string,boolean or float for a list: ")
name5 = input("please enter a integer,string,boolean or float for a list: ")
name6 = input("please enter a integer,string,boolean or float for a list: ")
name7 = input("please enter a integer,string,boolean or float for a list: ")
name8 = input("please enter a integer,string,boolean or float for a list: ")
name9 = input("please enter a integer,string,boolean or float for a list: ")
name10 = input("please enter a integer,string,boolean or float for a list: ")

list1 = [name1, name2, name3, name4, name5, name6, name7, name8, name9, name10]
# task 2

num1 = int(input("please enter a integer for a list: "))
num2 = int(input("please enter a integer for a list: "))
num3 = int(input("please enter a integer for a list: "))
num4 = int(input("please enter a integer for a list: "))
num5 = int(input("please enter a integer for a list: "))

list2 = [num1, num2, num3,num4,num5]

if num1 > num2 and num1 > num3 and num1 > num4 and num1 > num5:
    print("biggest number is : " + str(num1))
elif num2 > num1 and num2 > num3 and num2 > num4 and num2 > num5:
    print("biggest number is : " + str(num2))
elif num3 > num1 and num3 > num2 and num3 > num4 and num3 > num5:
    print("biggest number is : " + str(num3))
elif num4 > num1 and num4 > num2 and num4 > num3 and num4 > num5:
    print("biggest number is : " + str(num4))
else:
    print("biggest number is : " + str(num5))

# task 3

list2.pop(3)
print(list2)

# task4
num1 = int(input("please enter a integer for a list: "))
num2 = int(input("please enter a integer for a list: "))
num3 = int(input("please enter a integer for a list: "))
num4 = int(input("please enter a integer for a list: "))
num5 = int(input("please enter a integer for a list: "))

list2 = [num1, num2, num3,num4,num5]
print(list2[::-1])

# task 5
list2 = [num1, num2, num3,num4,num5]

if num1 in list2:
    print("this is in list")
elif num2 in list2:
    print("this is in list")
elif num3 in list2:
    print("this is in list")
elif num4 in list2:
    print("this is in list")
elif num5 in list2:
    print("this is in list")
else:
    print("this isnt in list")