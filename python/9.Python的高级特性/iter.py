# -*- coding: utf-8 -*-

dict = {
    "a": 1,
    "b": 2,
    "c": 3,
    "d": 4,
    "e": 5,
    "f": 6,
}

list = ["a", "b", "c", "d", "e"]

str = "abcde"

for key in str:
    print(key)

# for value in str.values():
#     print(value)
#
# for k, v in str.items():
#     print("key=%s, value=%s" % (k, v))


from collections import Iterable
print(isinstance(dict, Iterable))
print(isinstance(False, Iterable))

for i, v in enumerate(["A", "B", "C"]):
    print(i, v)
