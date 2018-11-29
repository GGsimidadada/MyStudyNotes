## let和const命令

### 1.	let命令

##### 基本用法

用法类似于var，但是所声明的变量，只在let命令所在的代码块内有效

for循环的计数器，就很适合使用let命令。并且，设置循环变量的那部分是一个父作用域，而循环体内部是一个单独的子作用域。

```javascript
for (let i = 0; i<3; i++) {
  let i = "abc";
  console.log(i);
}
//abc
//abc
//abc
```

##### 不存在变量提升

var 命令会发生变量提升现象。即变量可以在声明之前使用，值为undefined。

let命令所声明的变量一定要在声明后使用，否则报错。

```javascript
console.log(foo); //undefined
var foo = 2;

console.log(soo); //报错RefernceError
let soo = 2;
```

##### 暂时性死区

只要块级作用域内存在let命令，它所声明的变量就绑定（binding）这个区域，不再受外部的影响。

```javascript
var temp = 123;
if (true) {
  tmp = "abc"; //报错ReferenceError
  let tmp;
}
```

虽然存在全局变量tmp，但是块级作用域内let又声明了一个局部变量tmp，导致后者绑定这个块级作用域，所以在let声明变量前，对tmp赋值会报错。

ES6规定，如果区块中存在let和const命令，这个区块对这些命令声明的变量，从一开始就形成了封闭的作用域。凡是在声明之前就使用这些变量，就会报错。这在语法上，称为“暂时性死区”。

但是注意，有些死区比较隐蔽，比如：

~~~javascript
var x = x;   //不报错

let x = x;   //报错，因为let声明变量的语句没有执行完成，所以取不到x的值
~~~

总之，暂时性死区的本质就是，只要一进入当前作用域，所要使用的变量就已经存在了，但是不可获取，只有等到声明变量的那一行代码出现，才可以获取和使用该变量。

##### 不允许重复声明

let不允许在相同作用域内，重复声明同一个变量。

```javascript
function () {
  let a = 10;
  var a = 1;
}
//报错
```

因此不能在函数内重新声明参数。

### 2.	块级作用域	

```javascript
var tmp = new Date();
function f () {
  console.log(tmp);
  if (false) {
    var tmp = "hello world";
  }
}
f();  //undefined
```

在上述代码中，由于使用var声明变量，存在变量提升，所以当执行f()函数的时候，会将全局变量tmp的值覆盖为undefined，因此输出undefined。

```javascript
var s = 'hello';
for (var i=0; i<s.length; i++) {
  console.log(s[i]);
 
}
console.log(i);   //5
```

这段代码中，i只用来控制循环，但是循环结束后，它并没有消失，泄露成了全局变量。

###### ES6的块级作用域

let实际上为JavaScript新增了块级作用域。

```javascript
function f1 () {
  let n = 5;
  if (true) {
    let n = 10;
  }
  console.log(n);   //5
}
```

上面的函数有两个代码块，外层代码块不受内层代码块的影响。如果将let换成var，则最后的输出结果就是10了。

ES6允许块级作用域的任意嵌套。

```javascript
{{{{{let insane = 'Hello World'}}}}}
```

上面代码使用了一个五层的块级作用域，外层作用域无法读取内层作用域的变量。

块级作用域的出现，实际上使得立即执行函数表达式（IIFE）不再必要了。

##### 块级作用域与函数声明

ES5规定，函数只能在顶层作用域和函数作用域之中声明，不能在块级作用域中声明：

```javascript
//情况一
if (true) {
  function f() {}
}

//情况二
try {
  function f() {}
} catch (e) {
  //...
}
```

上面两种声明方式，在ES5中都是非法的。但是浏览器中没有遵循这个规定，为了兼容以前的旧代码，还是支持在块级作用域之中声明函数，因此上面两种情况实际都能运行，不会报错。

ES6中引入了块级作用域，明确允许在块级作用域之中声明函数，并且函数声明语句的行为类似于let，在块级作用域之外不可引用。

```javascript
function f() { console.log('I am outside!'); }

(function () {
  if (false) {
    function f () { console.log('I am inside!'); }
  }
  f();
})
```

上面这段代码，在ES5环境中，会输出"I am inside!"，因为在if中声明的函数f会被提升到函数作用域头部。但是在ES6环境中，理论上会输出"I am outside!"，因为if代码块中声明的函数类似于let，对代码块作用域外部没有影响。但是实际在ES6浏览器中会报错，原因为，如果改变了块级作用域内声明的函数的处理规则，会对网站中老代码产生很大的影响。为了减轻因此产生的不兼容问题，ES6规定，浏览器的实现可以不遵守上面的规定，有自己的行为方式：

- 允许在块级作用域内声明函数。
- 函数声明类似于var，即会提升到全局作用域或函数作用域的头部。
- 同时，函数声明还会提升到所在块级作用域的头部。

上面三条规则只对ES6的浏览器有效，其他环境的实现不用遵守，还是将块级作用域的函数声明当做let处理。

在浏览器ES6的环境中，块级作用域内声明的函数，行为类似于var声明的变量：

```javascript
//浏览器的ES6环境
function f() { console.log("outside"); }

(function () {
  var f = undefined;
  if (false) {
    function f() { console.log("inside"); }
  }
  f();      //Uncaught TypeError : f is not a function.
})
```

考虑到环境导致的行为差异太大，应该避免在块级作用域内声明函数。如果确实需要，也应该写成函数表达式，而不是函数声明语句：

```javascript
//函数表达式
{
  let a = '123';
  let f = function () {
    return a;
  }
}
```

另外，还需要注意的是，ES6的块级作用域允许声明函数的规则，只在使用大括号的情况下成立，如果没有大括号，就会报错：

```javascript
//不会报错
'use strict';
if (true) {
  function f() {}
}

//会报错
if (true) function f() {}
```

##### do表达式

块级作用域是一个语句，将多个操作封装在一起，没有返回值。现在有一个提案，使得块级作用域可以变为表达式，也就是说可以返回值。办法就是在块级作用域之前加上do，使它变为do表达式。

```javascript
let x = do {
  let t = f();
  t * t + 1;
}
```

上面代码中，变量x会得到整个块级作用域的返回值。

### 3. 	const命令

##### 基本用法

const声明一个只读的常量。一旦声明，常量的值就不能改变。

````javascript
const p = 3.14;   //3.14
p = 3;  //TypeError: Assignment to constant variable.
````

上面的代码中，const声明 了一个常量p，当试图改变p的值时，浏览器就会报错。

const一旦声明变量，就必须立即初始化，不能留到以后赋值：

```javascript
const foo; 
//SyntacError: Missing initializer in const declaration
```

上面的代码会报错，原因为const只声明了变量，但是没有赋值。

const的作用域与let命令相同：只在声明所在的块级作用域内有效。

```javascript
if (true) {
  const MAX = 5;
}
MAX;  //Uncaught ReferenceError : MAX is not defined.
```

const命令声明的变量也是不提升，同样存在暂时性死区，只能在声明的位置后面使用：

```javascript
if (true) {
  console.log(MAX);  //ReferenceError
  const MAX = 5;
}
```

const和let一样，不可重复声明变量。

```javascript
var message = 'Hello';
let age = 25;
//下面两行都会报错
const message = 'Goodbye';
const age = 20;
```

##### 本质

const实际上保证的并不是变量的值不得改动，而是变量指向的那个内存地址不得改动。对于简单类型的数据（数值、字符串、布尔值），值就保存在变量指向的那个内存地址，因此等同于常量。但对于符合类型的数据（主要是对象和数组），变量指向的内存地址，保存的只是一个指针，const只能保证这个指针是固定的，至于它指向的数据结构是不是可变的，就完全不能控制了。

```javascript
const foo = {};
//为foo添加属性可以成功
foo.name = 'haha';
foo.name;  //haha
//但是将foo指向另一个对象就会报错
foo = {};  //TypeError: "foo" is read-only;
```

在上面的代码中，foo存储的是一个地址，这个地址指向一个对象。使用const声明以后，foo就不能指向另一个地址了，但是对象本身是可变的，依然可以为其添加新属性。

如果想将对象冻结，应该使用`Object.freeze`方法。

```javascript
const foo = Object.freeze({});
//常规模式下，下面一行不起作用。
//严格模式下，该行会报错。
foo.prop = 123;
```

除了将对象本身冻结，对象的属性也应该被冻结。下面是一个将对象彻底冻结的函数：

```javascript
var constantize = (obj) => {
  //冻结对象
  Object.freeze(obj);
  //遍历对象的每一项
  Object.keys(obj).forEach( (key, i) ) => {
    //如果成员是对象，则对它执行该函数
    if ( typeof obj[key] === 'object' ) {
      constantize( obj[key] );
    }
  };
};
```

##### ES6声明变量的六种方法

ES5中只有两种声明变量的方法：`var`和`function`命令。

ES6中有6种声明方法：

- var 
- function
- let
- const
- import
- class

  ### 4.顶层对象的属性

顶层对象，在浏览器环境指的是`window`对象，在Node指的是`global`对象。ES5之中，顶层对象的属性与全局变量是等价的。即顶层对象的属性赋值，与全局变量的属性赋值是同一回事。

但是，这样的设计带来了几个很大的问题：

- 没办法在编译时就报出变量为生命的错误，只有运行时才能知道（因为全局变量可能是顶层对象的属性创造的，而属性的创造是动态的）。
- 容易错误的创建了全局变量（比如打字出错）。
- 顶层对象的属性是导出可以读写的，这样非常不利于模块化编程。
- 而且，window对象有实体含义，指的是浏览器的窗口对象，顶层对象是一个有实体含义的对象，也是不合适的。

而在ES6中，这一点得到了改变：

- 为了保持兼容性，var命令和function命令声明的全局变量，依旧是顶层对象的属性
- let命令、const命令、class命令声明的全局变量，不属于顶层对象的属性。

```javascript
var a = 1;
//如果在node的REPL环境，可以写成global.a
//或者采用通用方法，写成this.a
window.a;  //1

let b = 1;
window.b;  //undefined
```

### 5.	global对象

ES5中的顶层对象，在各种实现里面是不统一的：

- 浏览器里面，顶层对象是window，但是Node和Web Worker没有window
- 浏览器和Web Worker里面，self也指向顶层对象，但是Node没有self
- Node里面，顶层对象是global，但其他环境都不支持

同一段代码为了能够在各种环境都能取到顶层对象，现在一般是使用this变量，但是有局限性：

- 全局环境中，this会返回顶层对象。但是在Node模块和ES6模块中，this返回的是当前模块
- 函数里面的this，如果函数不是作为对象的方法运行，而是单纯作为函数运行，this会指向顶层对象。但是在严格模式下，这时this会返回undefined
- 不管是严格模式，还是普通模式，new Function('return this')()，总是会返回全局对象。但是如果浏览器用了CSP（Content Security Policy，内容安全政策），那么eval、new Function方法可能都无法使用。


