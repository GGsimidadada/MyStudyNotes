# -*- coding: utf-8 -*-

from collections import Iterator

print(isinstance((x for x in range(5)), Iterator))
print(isinstance([], Iterator))