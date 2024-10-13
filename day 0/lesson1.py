from turtle import *
#roof
shape("turtle")
width(7)
speed(75)
color("blue")
begin_fill()

right(300)
forward(200)

right(120)
forward(200)
end_fill()
goto(0, 0)

#house
color("red")
begin_fill()
right(30)
forward(200)

left(90)
forward(200)

left(90)
forward(200)

left(90)
forward(200)
end_fill()
penup()
left(90)
forward(200)

left(90)
forward(70)
pendown()
#door
color("brown")
begin_fill()
left(90)
forward(100)

right(90)
forward(60)

right(90)
forward(100)
end_fill()
penup()

left(180)
forward(100)

left(90)
forward(60)
#windows

color("cyan")
right(90)
forward(15)

pendown()
begin_fill()
left(90)
forward(60)

right(90)
forward(60)

right(90)
forward(60)

right(90)
forward(60)
end_fill()

penup()
forward(15)
left(90)
forward(60)

left(90)
forward(15)
pendown()

begin_fill()
right(90)
forward(60)

left(90)
forward(60)

left(90)
forward(60)

left(90)
forward(60)

end_fill()

left(90)
#window frames
color("brown")
forward(60)
left(90)

forward(60)
left(90)

forward(60)
left(90)

forward(60)
left(90)

forward(30)
left(90)

forward(60)
left(90)

forward(30)
left(90)

forward(30)
left(90)

forward(60)

penup()
left(90)
forward(30)

left(90)
forward(120)
pendown()

forward(60)
left(90)

forward(60)
left(90)

forward(60)
left(90)

forward(60)
left(90)

forward(30)
left(90)

forward(60)
left(90)

forward(30)
left(90)

forward(30)
left(90)

forward(60)
#outline
penup()
goto(0, 0)
pendown()
color("black")

right(120)
forward(200)

right(120)
forward(200)

right(30)
forward(200)

right(90)
forward(200)

right(90)
forward(200)

right(90)
forward(200)

right(90)
forward(200)

right(90)
forward(70)

right(90)
forward(100)

left(90)
forward(60)

left(90)
forward(100)

left(90)
forward(60)

left(90)
forward(50)
color("yellow")
left(90)
penup()
forward(2)
pendown()
forward(3)

penup()
goto(0, 0)
forward(900)