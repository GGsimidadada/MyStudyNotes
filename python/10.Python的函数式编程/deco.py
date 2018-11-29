# -*- coding: utf-8 -*-



def log(func):
    def wrapper(*args, **kw):
        print("Call: %s()" % func.__name__)
        return func(*args, **kw)
    return wrapper

@log
def time():
    print("hahhahh")

time()