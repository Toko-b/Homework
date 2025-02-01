
# მეგობარი გვწერს მესიჯს მაგრამ კლავიატურა აქვს გაფუჭებული და space-ის მაგივრად #-ს წერს 

msg = input()

# ჩვენ კი #-ს ვცვლით space-ით და ვასრულებთ დავალებას
print(msg.replace("#", " "))

# task 2

name = input("Please enter your name: ")

age = int(input("Please enter your Age: "))

print(f"Hello {name} You are {age} years old")

print("Hello {0} You are {1} years old".format(name,age))

print("Hello " + name + " You are " + str(age) + " years old")

# task 3

list2 = ["Python", "is", "fun"]

str1 = " ".join(list2)

print(str1)

# task 4

sentence = input("please enter a sentence: ")

splited = sentence.split()

print(splited)

# task 5

sentence2 = input("Please enter a sentence: ")

word = input("Please enter a word from a sentence you want to replace: ")

replaced_word = input("Please enter a word you want to replace it with: ")

replaced_sentence = sentence2.replace(word, replaced_word)

print(replaced_sentence)