# -*- coding: utf-8 -*-

def enroll(name, gender, age = 6, city = "蚌埠"):
    print("name:", name)
    print("gender:", gender)
    print("age:", age)
    print("city:", city)

enroll("张三", "男")
enroll("李四", "女", 9)
enroll("王五", "男", city = "南京", age = 10)


def calc(*numbers):
    sum = 0
    print(numbers)
    for n in numbers:
        sum = sum + n
    return print(sum)
calc(1, 2, 3, 4, 5)
calc(*[5, 6, 7])

def person(name, age, **kw):
    return print("name:%s; age:%s; other:%s" % (name, age, kw))
person("高浩然", "18", height = "172cm", weight = "65kg")
a = {"身高": "172cm", "体重": "65kg"}
person("高浩然", "18", **a)

def fun(name, age, *, city, job):
    return print(name, age, city, job)
fun("刘艮", 27, city = "南京")
