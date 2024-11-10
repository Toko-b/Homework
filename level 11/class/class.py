

print("if you want a driving licence you must be 18 years old and have 1 year experience so ")

age = int(input("enter your age: "))
experience = int(input("how many years of experiance do you have? : "))

if age >= 18 and experience >= 1:
    print("you can get driving licence")
else :
    print("sorry you cant get driving licence")