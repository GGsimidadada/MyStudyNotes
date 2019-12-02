/*
 * @Description: 
 * @Author: 高浩然
 * @Date: 2019-11-08 13:11:23
 * @LastEditTime: 2019-11-09 14:30:27
 */
/* let buffer = new Buffer(10);
console.log(buffer); */

// 字符串转成二进制
let str = 'www.baidu.com';
let buffer = Buffer.from(str);
console.log(buffer);
console.log(buffer.toString());