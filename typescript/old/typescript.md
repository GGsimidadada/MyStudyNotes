# TypeScript简单应用

## 安装 Typescript

使用node.js下的`npm`包管理工具安装：

```typescript
npm install -g typescript
```

typescript文件的后缀名为`.ts`，在命令行中运行`tsc xxx.ts`可以将`xxx.ts`文件编译成`.js`文件，并输出到当前目录中。



##类型注解

可以通过类型注解的方法为函数或变量限定类型，如果传入了不同类型的值，则会报错：

```typescript
function greeter(person: string) {
    return "Hello, " + person;
}

let user = [0, 1, 2];

document.body.innerHTML = greeter(user);
```

这段代码中限定了`greeter`函数的参数`person`为`string`类型，但是传入的`user`是一个`array`，如果编译的话，控制台会报类型错误：

```typescript
greeter.ts(7,26): error TS2345: Argument of type 'number[]' is not assignable to parameter of type 'string'.
```

如果调用函数时，没有传入定义数量的参数，typescript也会报错：

```typescript
document.body.innerHTML = greeter();
```

运行编译，会报下面的提示：

```typescript
greeter.ts:8:27 - error TS2554: Expected 1 arguments, but got 0.
```

但是并不会阻止程序生成`.js`文件，只是可能不会按预期执行。



##接口

在typescript中，还可以给参数限定指定的数据结构以及类型，比如下面的代码：

```typescript
interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user = { firstName: 'Jane', lastName: 'User' };

document.body.innerHTML = greeter(user);
```

这段代码中，为`greeter`函数的参数指定了一个`Person`类型的数据结构，`Person`包含了两个属性：`firstName`和`lastName`，并且类型均为`string`。当调用函数时，我们需要传入一个对象，这个对象必须有`firstName`和`lastName`两个属性，并且属性的值也必须是`string`类型，否则会报错。



##类

Typescript支持Javascript的新特性，比如支持基于类的面向对象编程。

接口和类可以一起用。现在改写上面的代码，先定义一个类，使它符合接口的条件，然后再传入它的实例：

```typescript
class Student {
    fullName: string;
    constructor(public firstName, public middleInitial, public lastName) {
        this.fullName = firstName + ' ' + middleInitial + " " + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return 'Hello ' + person.firstName + ' ' + person.lastName;
}

let user = new Student('Jane', 'M.', 'User');

document.body.innerHTML = greeter(user);
```

在这里定义了一个`Student`类，它接收三个参数：`firstName`, `lastName`和`middleInitial`，由于并没有指定数据类型，因此可以传入任意类型的值。然后通过`new`关键字创建一个实例，并且传入三个参数，如果少于三个，编译时会报错。然后将这个实例赋值给`user`变量。又定义了一个接口`Person`，并且将`greeter`的参数`person`指定为`Person`类型。由于`Student`的实例拥有`firstName`和`lastName`属性，因此可以把`user`传入`greeter`函数中。



##运行TypeScript Web应用

在html文件中引入编译后的`.js`文件，就可以运行了。



# 文档

## 基础类型

### 布尔值

```typescript
let isDone: boolean = true;
```

### 数字

```typescript
let decLiteral: number = 123;				// 十进制
let hexLiteral: number = 0xf00d;			// 十六进制
let binaryLiteral: number = 0b1010;			// 二进制
let octalLiteral: number = 0o744;			// 八进制
```

 ### 字符串

```typescript
let name: string = 'bob';
```

### 数组

有两种方式定义数组元素的类型。第一种可以在元素类型后面接上`[]`，表示由此类型元素组成的一个数组：

```typescript
let list: number[] = [1, 2, 3];
```

第二种方式使用数组泛型，`Array<元素类型>`：

```typescript
let list: Array<number> = [1, 2, 3];
```

### 元祖

元祖类型`Tuple`允许表示一个已知元素数量和类型的数组，各成员的类型不必相同。

```typescript
let x: [string, number];	// 定义一个Tuple，有两个成员，类型分别是string和number

x = ['aa', 123];  // 正确

x = [123, 'aa'];  // 报错，x[0]类型应该是string, x[1]的类型应该是number

x = ['aa', 123, '1'];  // 报错，超过了预定长度
```

### 枚举

