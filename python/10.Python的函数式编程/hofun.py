# -*- coding: utf-8 -*-

def add(a, b, f):
    return f(a) + f(b)

print(add(-10, -8, abs))

def f(x):
    return x * x

L = list(range(9))
m = map(f, L)
print(m)
print(list(m))

N = [
    "adam",
    "LISA",
    "barT"
]
