# -*- coding: utf-8 -*-

class Student(object):
    _score = 50

    @property
    def score(self):
        return self._score

    # @score.setter
    # def score(self, value):
    #     if not type(value) == int:
    #         raise ValueError("score必须是整数")
    #     if value < 0 or value > 100:
    #         raise ValueError("score必须在0-100之间")
    #     self._score = value


a = Student()
print(a.score)



class Fib(object):
    def __init__(self):
        self._a, self._b = 0, 1

    def __iter__(self):
        return self

    def __next__(self):
        self._a, self._b = self._b, self._a + self._b
        if self._a > 10000:
            raise StopIteration("循环完毕")
        return self._a
    def __getitem__(self, n):
        for x in range(n):


for a in Fib():
    print(a)
