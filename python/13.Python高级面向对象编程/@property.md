@property是Python内置的一个装饰器，负责把一个方法变成属性调用。

把一个getter方法变成属性，只需要加上@property就可以了，此时，@property本身又创建了另一个装饰器`@var.setter`，负责把一个setter方法变成属性赋值。

如果只定义`@property`，不定义setter方法就是一个只读属性。