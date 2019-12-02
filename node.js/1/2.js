/*
 * @Description: 
 * @Author: 高浩然
 * @Date: 2019-11-10 16:14:28
 * @LastEditTime: 2019-11-10 16:24:11
 */
// 引入fs模块
const fs = require('fs');

// 打开文件     w 代表写入，r 代表读取
const fd = fs.openSync('./test.txt', 'w');
console.log(fd);

// 写入内容
fs.writeSync(fd, '写入文件数据');

// 保存并退出
fs.closeSync(fd);