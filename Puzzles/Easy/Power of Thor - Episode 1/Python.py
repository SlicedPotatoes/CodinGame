light_x, light_y, initial_tx, initial_ty = [int(i) for i in input().split()]
while True:
    # The remaining amount of turns Thor can move. Do not remove this line.
    remaining_turns = int(input())
    answer = ""
    if initial_ty > light_y:
        answer += "N"
        initial_ty -= 1
    elif initial_ty < light_y:
        answer += "S"
        initial_ty += 1
    if initial_tx > light_x:
        answer += "W"
        initial_tx -= 1
    elif initial_tx < light_x:
        answer += "E"
        initial_tx += 1
    print(answer)
