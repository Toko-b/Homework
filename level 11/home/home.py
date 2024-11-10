

score = int(input("enter your test score: "))

if score >= 90:
    print("you get A")
elif score >= 80:
    print("you get B")
elif score >= 70:
    print("you get C")
elif score >= 60:
    print("you get D")
else:
    print("you get F")

age = int(input("enter your age: "))

if age < 13 :
    print("you are a child")
elif age >= 13 and age <= 19:
    print("you are a teenager")
else:
    print("you are a adult")

num = int(input("please enter a number: "))

if num == 0:
    print("zero")
elif num > 0:
    print("positive number")
else:
    print("negative number")

product_price = float(input("how much does your product cost?: "))

if product_price > 50:
    print("you get 10% discount")
    print("your total is")
    print(product_price * 0.9)
elif product_price >= 20 and product_price < 50:
    print("you get 5% discout")
    print("your total is")
    print(product_price * 0.95)
else:
    print("sorry you dont get a discount")