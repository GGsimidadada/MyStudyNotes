/*
 * @Description: 
 * @Author: 高浩然
 * @Date: 2019-11-10 16:50:49
 * @LastEditTime: 2019-11-10 18:26:49
 */
// 引入模块
const fs = require('fs');

// 创建写入流
const ws = fs.createWriteStream('test3.txt');

// 设置监听事件
ws.once('open', () => console.log('通道已经打开'));
ws.once('close', () => console.log('通道已经关闭'));

// 写入数据，可以多次调用
ws.write('第一次写入');
ws.write('第二次写入');
ws.write('第三次写入');

// 结束写入操作，通道会自动关闭
ws.end();