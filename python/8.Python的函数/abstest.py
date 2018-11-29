import math

def my_abs(x):
    if not isinstance(x, (int, float)):
        raise TypeError("bad operand type")
    if x >= 0:
        pass
    else:
        return -x

#print(my_abs("2"))

def move(x, y, step, angle = 0):
    nx = x + step * math.cos(angle)
    ny = y - step * math.sin(angle)
    return nx, ny

x, y = move(100, 100, 60, math.pi / 6)
print(x, y)

