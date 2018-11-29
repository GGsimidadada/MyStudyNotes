class Animal(object):
    __slots__ = ()

class Cat(Animal):
    __slots__ = ("name", "age")

c = Animal()
c.name = "消化"
print(c.name)

a = Cat()
a.name = "小黑"
a.run = "fast"
print(a.name, a.run)