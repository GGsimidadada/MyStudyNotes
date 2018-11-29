"use strict";
// 声明函数
function hanshu(age) {
    return "\u627E\u5230\u4E86" + age + "\u7684\u5C0F\u6D01\u59D0\u59D0";
}
var age = 18;
var result = hanshu(age);
console.log(result);
var age2 = 24;
var result2 = hanshu(age2);
console.log(result2);
function search(age, stature) {
    if (age === void 0) { age = 24; }
    if (stature === void 0) { stature = '贼丑'; }
    return "\u627E\u5230\u4E86" + age + "\u5C81" + stature + "\u7684\u5C0F\u6D01\u59D0" + '';
}
var age3 = 19;
console.log(search(age3));
var stature = '大长腿';
console.log(search(age3, stature));
console.log(search());
function find() {
    var xuqiu = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        xuqiu[_i] = arguments[_i];
    }
    var yy = '找到了';
    yy += xuqiu.join() + '的小洁姐';
    return yy;
}
console.log(find('22岁', '大长腿', '瓜子脸', '水桶腰'));
