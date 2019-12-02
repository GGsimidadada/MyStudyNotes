/*
 * @Description: 
 * @Author: 高浩然
 * @Date: 2019-11-14 15:56:31
 * @LastEditTime: 2019-11-14 16:02:13
 */
// 1. 引入模块
const mongoose = require('mongoose');
// 2. 建立mongoDB连接
mongoose.connect('mongodb://localhost/m_data');
// 监听各种状态
const db = mongoose.connection;
db.on('error', () => {
    console.log('连接失败');
});
db.once('open', () => {
    console.log('连接成功');
});
db.once('close', () => {
    console.log('数据库断开成功');
});