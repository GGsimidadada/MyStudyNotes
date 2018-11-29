# -*- coding: utf-8 -*-

height = 1.75
weight = 80.5
BMI = weight / (height * height)
print(BMI)
if BMI >= 32:
    print("严重肥胖")
elif BMI >= 28 and BMI < 32:
    print("肥胖")
elif BMI >= 25 and BMI < 28:
    print("过重")
elif BMI >=18.5 and BMI < 25:
    print("正常")
else:
    print("过轻")