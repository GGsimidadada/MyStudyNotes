### Node.js的特点

适合小型/微型服务器架构。擅长I/O，不擅长计算。天生异步。

1. 单线程
2. 非阻塞I/O
3. 事件驱动

单线程执行，有I/O操作时，加入事件环。

适合做网站开发、即时聊天、api(移动端、PC、H5)、HTTP Proxy、前端构建工具、跨平台打包工具、操作系统(NodeOS)、命令行工具、反向代理、编辑器(VSCode、Atom)。

Node.js也不是全能的，不适合大型服务，比如银行等。



### 客户端与服务器

CS与BS：软件使用方式上两种划分。CS指PC客户端/服务器架构，BS指浏览器/服务器架构。



### Common.js

模块引用：`require('module');`

模块导出：`exports.xxx = xxx;`

`require`和`exports`实际上是函数参数。每个node文件都被包含在一个函数内，在文件中使用的`require`和`exports`实际上是这个函数的参数。这个函数的参数有：`exports, require, module, __filename, __dirname`。

`exports`：用来将函数内部的局部变量或者函数暴露到外部。

`require`：用来引入外部的模块。

`module`：代表当前模块本身，`exports`即是`module`的一个属性。

`__filename`：文件在电脑中的绝对路径。

`__dirname`：文件所在文件夹在电脑中的绝对路径。



### 包和包管理器

包管理器：`npm`和`yarn`。安装node后自动包含`npm`。



### 核心模块

#### Buffer（缓冲区）

二进制数据容器，数据结构类似于数组，专门用于Node中数据的存放。

旧的创建方式：`let buffer = new Buffer(10); // 已废弃`

新的创建方式：`Buffer.from([]);`

使用时不需要引入`Buffer`，可以直接使用。

```javascript
Buffer.alloc(size[, fill[, encoding]]);  // 初始化Buffer，长度固定，不能动态添加
```

`Buffer`中是以二进制存放数据的，和数组类似，方法也和数组类似。

#### FS（文件系统）

导入模块：`let fs = require('fs');`

同步操作：

```javascript
// 导入模块
const fs = require('fs');
// 打开文件，如果没有文件，则会自动创建一个
// 打开文件的同步方法，第一个参数为路径，第二个参数 w 代表写，r 代表读，a 代表追加
const fd = fs.openSync('test.txt', 'w');
// 写入内容
// 写入数据的同步方法，第一个参数为操作的文件对象，第二个参数为写入内容
fs.writeSync(fd, '写入的数据');
// 保存并关闭
fs.closeSync(fd);
```

异步操作：

```javascript
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
```

使用写入流：

```javascript
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
```

使用写入流的管道：

```javascript
const fs = require('fs');

const rs = fs.createReadStream('D:\\迅雷下载\\朋友别哭1.mp4');
const ws = fs.createWriteStream('朋友别哭.mp4');

// 通过管道传输数据
rs.pipe(ws);
```



### 数据库 - MongoDB

数据库分类：

RDBMS（关系型数据库）：

1. 通过一张张表来建立关联，
2. 基本上都使用SQL语言来管理数据库。

NoSQL（非关系型数据库）：

1. 没有行、列的概念，用JSON来存储数据库。集合相当于表，文档相当于行。
2. 语言非标准化。
3. 操作快，适合微小型项目。

MongoDB是为快速开发互联网Web应用而设计的数据库系统，设计目标是极简、灵活，经常在Web应用栈的业务层被运用。

#### 配置

安装后，配置环境变量，然后命令行输入`mongod`，默认端口`27017`，默认数据库路径`C:\\data\db`。设为系统服务命令：`sc.exe create MongoDB binPath= "\"C:\Program Files\MongoDB\Server\4.2\bin\mongod.exe\" --service --config=\"C:\Program Files\MongoDB\Server\4.2\mongod.cfg\"" DisplayName= "MongoDB" start= "auto"`。

#### 基本组成

1. 数据库(database)
2. 集合(collection)
3. 文档(document)

#### 基本指令(CRUD 增删改查)

`show dbs`：显示当前所有的数据库

`use 数据库名`：进入到指定数据库中（创建数据库）

`db`：显示当前数据库

`db.<collection>.drop()`：删除集合

`db.dropDatabase()`：删除数据库

`show collections`：显示数据库中的集合

`db.<collection>.insert(<document>)`：往数据库中插入文档

`db.<collection>.find()`：查询集合中所有的文档

`db.<collection>.find({ [key]: value })`：查询集合中符合条件的文档

`db.<collection>.find().limit(end)`：查询集合中区间内的文档

`db.<collection>.find().skip(num)`：返回集合中num条后的文档

`db.<collection>.update(<fliter>, <update>[, options])`：更新最先符合条件的文档，如果不加更新操作符，则会整条替换为update。

`db.<collection>.updateMany(<fliter>, <update>[, options])`：更新所有符合条件的文档，如果不加更新操作符，则会整条替换为update。

`db.<collection>.remove(<filter>[, <justOne>: boolean])`：删除符合条件的文档，如果`justOne`为true，则只会删除符合条件的第一条

#### 操作符

更新操作符：`$set`更新指定字段，`$rename`重命名字段，`$unset`删除字段，`$inc`为数字字段的某个field增加value

数组更新操作符：`$push`往数组后追加一条数据，`$pushAll`追加多条数据，`$addToSet`追加一条数组内不相同的数据，如果有相同项则不追加，`$pop`删除数组内第一个或者最后一个值，传-1或者1，`$pull`删除数组内的指定值，`$pullAll`一次删除数组内的多个值

比较操作符：

1. `$gt`：大于
2. `$gte`：大于等于
3. `lt`：小于
4. `lte`：小于等于
5. `$in`：包含
6. `$nin`：不包含
7. `$eq`：等于
8. `$ne`：不等于	

逻辑操作符：

1. `$or`：或者
2. `$and`：并且
3. `$not`：取非
4. `$nor`：

#### 集合间关系

一对一、一对多、多对多。

#### 排序

查询文档时，默认是按照`_id`的字段升序排列。

`sort()`：传入排序依据的多个条件字段，1代表升序，-1代表降序，优先级从左往右

#### 索引

`find()`：方法可以传入第二个参数，来决定显示或者隐藏哪些字段，1代表显示，0代表不显示



### Mongoose模块

可以用`node.js`来操作`mongoDB`的模块。

`npm install mongoose`：安装模块

```javascript
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
```

#### 基本使用

mongoose中提供了几个新的对象：

1. `Schema`：模式对象，定义约束了数据库中的文档结构
2. `Model`：作为几何中的所有文档的表示，相当于`MongoDB`数据库中的集合`Collection`
3. `Document`：表示集合中的具体文档

```javascript
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
```

