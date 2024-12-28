#  task 1

def me():
    name = "Tornike"
    surname = "Buskivadze"
    age = 13
    country = "Georgia"
    city = "Rustavi"
    favorite_hobby = "swimming"
    print("hello my name is " + name + " and my surname is " + surname + " im " + str(age) + " years old. i live in " + country + " and my city's name is " + city + " my favorite hobby is " + favorite_hobby)

me()

# task 2
def calculator():
    cal = input("what do you want to do? : ")
    if cal == "plus":
        num = int(input("enter a number: "))
        num2 = int(input("enter a second number: "))
        print(num + num2)
    elif cal == "minus":
        num = int(input("enter a number: "))
        num2 = int(input("enter a second number: "))
        print(num - num2)
    elif cal == "multiply":
        num = int(input("enter a number that you want to be devided: "))
        num2 = int(input("enter a second number: "))
        print(num * num2)
    elif cal == "devide":
        num = int(input("enter a number: "))
        num2 = int(input("enter a second number: "))
        print(num // num2)
    else:
        print("i dont get what you want to do")

calculator()