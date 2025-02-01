# task 1

name = input("Please enter your name: ")

age = int(input("Please enter your Age: "))

print(f"Hello {name} You are {age} years old")

print("Hello {0} You are {1} years old".format(name,age))

print("Hello " + name + " You are " + str(age) + " years old")

# task 2

list2 = ["Python", "is", "fun"]

str1 = " ".join(list2)

print(str1)

# task 3

sentence = input("please enter a sentence: ")

splited_sentence = sentence.split()

print(splited_sentence)

# task 4

sentence2 = input("Please enter a sentence: ")

word = input("Please enter a word from a sentence you want to replace: ")

replaced_word = input("Please enter a word you want to replace it with: ")

replaced_sentence = sentence2.replace(word, replaced_word)

print(replaced_sentence)

# task 5

words = "HelLo YoUnG LAdy HoW aRE YoU DoiNG TOday"

lowercase_words = words.lower()

print(lowercase_words)

# task 6

sentence3 = input("Please enter a sentence: ")

upper_sentence = sentence3.upper()

print(upper_sentence)