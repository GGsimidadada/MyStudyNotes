var age: number = 12;
console.log(age);
var b: boolean = true;

// 枚举类型 enum    变量一般用大写
enum REN { nan, nv, yao };
console.log(REN.nan); // 0，相当于索引
enum REN2 { nan = '男人', nv = '女人', yao = '人妖' };
console.log(REN2.nan); // 男人

// 任意类型 any
var t: any = 10;
console.log(t); // 10
t = 'haha';
console.log(t); // 'haha'
