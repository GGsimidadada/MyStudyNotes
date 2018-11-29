# -*- coding: utf-8 -*-

class Student(object):
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def print_age(self):
        return print("姓名%s年龄%s" % (self.name, self.age))

    def get_name(self):
        return self.name

    def set_name(self, name):
        self.name = name

    def __len__(self):
        return 100



