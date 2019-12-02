/*
 * @Description: 
 * @Author: 高浩然
 * @Date: 2019-11-11 13:22:14
 * @LastEditTime: 2019-11-12 12:52:31
 */
const fs = require('fs');

const rs = fs.createReadStream('D:\\迅雷下载\\朋友别哭1.mp4');
const ws = fs.createWriteStream('朋友别哭.mp4');

// 通过管道传输数据
rs.pipe(ws);