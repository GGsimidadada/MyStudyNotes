# -*- coding: utf-8 -*-

def fib(max):
    n, a, b = 0, 0, 1
    while n < max:
        yield b
        a, b = b, a + b
        n = n + 1
    return print("done")
print(fib(10))

g = fib(10)
while True:
    try:
        x = next(g)
        print("g:", x)
    except StopIteration as e:
        print("return value:", e.value)
        break

def yh(line):
    n, L = 1, [1]
    while n < line:
        yield L
        L = [1] + [L[i] + L[i + 1] for i in range(len(L) - 1)] + [1]
    return "done"

for n in yh(10):
    print(n)