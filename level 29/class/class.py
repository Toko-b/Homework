# task 1

list1 = [2,8,4,6]
#ვქმნით სიას და შეგვაქ 4 მნიშვნელობა

list1.remove(2)
#სიას ვაშორებთ მნიშვნელობა 2-ს

print(len(list1) + list1.count(6))
#შემდეგ გამოგვაქვს შეცვლის მერე სიაში შეტანილი მნიშვნელობების რაოდენობას მიმატებული 6-ის რაოდენობა სიაში ამ შემთხვევაში არის 1

# answer is 4

# task 2

queue = ['John', 'Amy', 'Bob', 'Adam']
# ვქმნით სიას

user = input('please enter your name: ')
# მომხმარებელს შემოვატანინებთ სახელს

queue.append(user)
# მომხმარებლის მიერ შემოტანილ სახელს ვამატებთ სიაში

print(queue)
# გამოგვაქვს განახლებული სია