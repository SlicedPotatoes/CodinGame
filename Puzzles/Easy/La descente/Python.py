import sys
import math

# game loop
while True:
    answer = 0
    answerH = 0
    for i in range(8):
        mountain_h = int(input())  # represents the height of one mountain.
        if answerH < mountain_h:
            answerH = mountain_h
            answer = i

    print(answer)
