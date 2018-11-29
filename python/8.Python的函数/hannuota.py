# -*- coding: utf-8 -*-


#用递归实现汉诺塔排列的步骤
def hannuota(n, a, b, c):
    if n == 1:
        return print(a, "=>", c)
    hannuota(n-1, a, c, b)
    print(a, "=>", c)
    hannuota(n-1, b, a, c)

hannuota(4, "a", "b", "c")