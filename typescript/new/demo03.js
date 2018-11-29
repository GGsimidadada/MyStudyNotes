"use strict";
var age = 12;
console.log(age);
var b = true;
// 枚举类型 enum    变量一般用大写
var REN;
(function (REN) {
    REN[REN["nan"] = 0] = "nan";
    REN[REN["nv"] = 1] = "nv";
    REN[REN["yao"] = 2] = "yao";
})(REN || (REN = {}));
;
console.log(REN.nan); // 0，相当于索引
var REN2;
(function (REN2) {
    REN2["nan"] = "\u7537\u4EBA";
    REN2["nv"] = "\u5973\u4EBA";
    REN2["yao"] = "\u4EBA\u5996";
})(REN2 || (REN2 = {}));
;
console.log(REN2.nan); // 男人
// 任意类型 any
var t = 10;
console.log(t); // 10
t = 'haha';
console.log(t); // 'haha'
