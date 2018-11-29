# -*- coding: utf-8 -*-

def count():
    fs = []
    for i in range(1, 4):
        def f():
            return i * i
        fs.append(f)
    return fs

print(count())
print(count()[0]())
print(count()[1]())
print(count()[2]())