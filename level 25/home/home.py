player = int(input("please enter a number from 1 to 100: "))

attempt = 3

for attempt in range(attempt):

    computer = int(input("please enter a number that you think is right: "))
    
    if computer < player:
        print("low")
    elif computer > player:
        print("high")
    else: 
        print("you are right")
        break
    
