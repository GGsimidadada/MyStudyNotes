/*
 * @Description: 
 * @Author: 高浩然
 * @Date: 2019-11-10 18:27:46
 * @LastEditTime: 2019-11-11 13:18:31
 */
// 导入模块
const fs = require('fs');

// 读取文件
fs.readFile('test3.txt', (err, data) => {
    if (!err) {
        console.log(data);
        console.log(data.toString());
    } else {
        throw err;
    }
});

// 读取图片
fs.readFile('C:\\Users\\Administrator\\Desktop\\1.png', (err, data) => {
    if (!err) {
        // 写入图片
        fs.writeFile('img.jpg', data, (err) => {
            if (!err) {
                console.log('写入成功!');
            }
        });
    } else {
        throw err;
    }
});