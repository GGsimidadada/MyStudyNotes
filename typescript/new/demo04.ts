// 声明函数
function hanshu (age: number): string {
    return `找到了${ age }的小洁姐姐`;
}

var age: number = 18;
var result = hanshu(age);
console.log(result);
var age2 = 24;
var result2 = hanshu(age2);
console.log(result2);

function search (age: number = 24, stature: string = '贼丑'): string {
    return `找到了${ age }岁${ stature }的小洁姐` + '';
}
var age3: number = 19;
console.log(search(age3));
var stature: string = '大长腿';
console.log(search(age3, stature));
console.log(search());

function find (...xuqiu: string[]): string {
    var yy = '找到了';
    yy += xuqiu.join() + '的小洁姐';
    return yy;
}
console.log(find('22岁', '大长腿', '瓜子脸', '水桶腰'));