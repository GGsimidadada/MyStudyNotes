/*
 * @Description: 
 * @Author: 高浩然
 * @Date: 2019-11-10 16:30:55
 * @LastEditTime: 2019-11-10 16:43:41
 */
// 引入模块
const fs = require('fs');

// 打开文件
fs.open('test2.txt', 'a', (err, fd) => {
    if (!err) {
        // 写入文件
        fs.writeFile(fd, '用异步方法写入数据', (err) => {
            if (!err) {
            } else {
                throw err;
            }
            // 关闭文件
            fs.close(fd);
        });
    } else {
        throw err;
    }
});