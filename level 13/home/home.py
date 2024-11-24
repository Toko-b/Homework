
user_input = int(input("tell me a number from 1 to 10 : "))
answer = 3

while user_input != answer:
    user_input = int(input("that is wrong try again :"))
    if user_input == answer:
        print("your answer is RIGHT")



num = 0

while num != 100:
    num = num + 5
    print(num)
    

password = "group 55" 
user_input = (input("please enter your password : "))

while user_input != password:
    user_input = input("try again : ")
    if user_input == password:
        print("Acces granted")
    else :
        print("acces denied , try again")