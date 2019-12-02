/*
 * @Description: 
 * @Author: 高浩然
 * @Date: 2019-11-14 17:06:05
 * @LastEditTime: 2019-11-14 17:21:05
 */
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/m_data');
const db = mongoose.connection;

db.once('open', () => {
    console.log('数据库连接成功');
});

// 创建Schema对象
const Schema = mongoose.Schema;
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

// 插入数据
/* personModel.create([
    { name: 'aaa', age: 66, char: 'sdd', sex: '女' },
    { name: 'bbb', age: 15, char: 'sdd', sex: '男' },
    { name: 'ccc', age: 34, char: 'sdd', sex: '女' },
    { name: 'ddd', age: 98, char: 'sdd', sex: '男' },
    { name: 'fff', age: 24, char: 'sdd', sex: '女' },
    { name: 'eee', age: 44, char: 'sdd', sex: '男' },
], (err) => {
    if (err) throw err;
    console.log('插入成功');
}); */

// 查询数据
personModel.find({}, { name: 1, _id: 0 }, (err, docs) => {
    if (err) throw err;
    console.log(docs);
});