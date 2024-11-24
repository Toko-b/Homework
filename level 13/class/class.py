# sequance = თანმიმდევრობა არის როდესაც კოდი როდესაც ამოქმედდება მეორეც უნდა ამოქმედდეს პირველის მერე
# iteration = იტერაცია არის გამეორება ანუ რაიმე კოდის ხელახლა გამოტანა რამდენჯერმე
# selection = არჩევა ჩვენ ვირჩევთ თუ როგორ გაგრძელდება კოდის სვლა

num = int(input("please enter a number: "))

if num == 5:
    print("that answer is right")
elif num > 5 and num <= 10:
    print("you are close to the answer")
elif num > 10:
    print("sorry you got it wrong and you are not close to the number")
else:
    print("sorry your answer is wrong")

ger = 0

while ger != 50:
    print("GOA")
    ger += 1

inte = 50

while inte != 0:
    print(inte)
    inte = inte - 1

num1 = 0

while num1 != 30:
    print(num1)
    num1 = num1 + 2