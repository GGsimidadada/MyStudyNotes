# -*- coding: utf-8 -*-

print(list(range(1, 5)))
print(tuple(range(1, 5)))

L = [x + x for x in range(1, 20)]
print(L)

L = [x+x for x in range(1, 20) if x % 3 == 1]
print(L)

L = [m * n for m in range(1, 20) if m % 3 == 0 for n in range(1, 20) if n % 4 == 0]
print(L)

D = {
    "高浩然": 20,
    "刘艮": 21,
    "刘琴": 22
}
L = [k + ":%s" % v for k, v in D.items()]
print(L)

L1 = ['Hello', 'World', 18, 'Apple', None]
L2 = [x.lower() for x in L1 if isinstance(x, str)]
print(L2)