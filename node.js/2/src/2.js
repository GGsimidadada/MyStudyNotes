/*
 * @Description: 
 * @Author: 高浩然
 * @Date: 2019-11-14 16:07:15
 * @LastEditTime: 2019-11-14 16:27:05
 */
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/m_data');
const db = mongoose.connection;

db.once('open', () => {
    console.log('数据库连接成功');
});

// 创建Schema对象
const Schema = mongoose.Schema;
console.log('创建Schema');
const personSchema = new Schema({
    name: String,
    age: Number,
    sex: {
        type: String,
        default: '男'
    },
    chat: String,
});

// 创建Model对象
const personModel = mongoose.model('person', personSchema);
console.log('创建personModel');

// 插入文档
personModel.create({
    name: '高浩然',
    age: 29,
    sex: '男',
    char: '12356822',
}, (err) => {
    if (!err) {
        console.log('插入成功');
    } else {
        throw err;
    }
});

personModel.create({
    name: '李怡萱',
    age: 25,
    sex: '女',
    char: '165894445',
}, (err) => {
    if (!err) {
        console.log('插入成功');
    } else {
        throw err;
    }
});
