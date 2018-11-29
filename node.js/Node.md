# Node.js

## 内置模块

### fs

#### stat

通过`fs.stat()`可以获取指定目录或文件的详细信息，它返回一个`Stat`对象：

```javascript
'use strict';

const fs = require('fs');

fs.stat('./Node.md', function (err, stat) {
    if (err) {
        console.log(err);
    }
    else {
        console.log(stat);						// Stat对象，包含文件信息
        console.log(stat.isFile());				// true
        console.log(stat.isDirectory());		// false
    }
});
```

以上面的文件为例，返回的`Stat`对象内容如下：

```javascript
Stats {
  dev: 677134220,
  mode: 33206,
  nlink: 1,
  uid: 0,
  gid: 0,
  rdev: 0,
  blksize: undefined,
  ino: 7036874418075143,
  size: 157,
  blocks: undefined,
  atimeMs: 1528078618587.0183,
  mtimeMs: 1528075663508.7554,
  ctimeMs: 1528075663508.7554,
  birthtimeMs: 1528075535856.0137,
  atime: 2018-06-04T02:16:58.587Z,
  mtime: 2018-06-04T01:27:43.509Z,
  ctime: 2018-06-04T01:27:43.509Z,
  birthtime: 2018-06-04T01:25:35.856Z 
}
```

`stat()`是异步函数，它也有对应的同步函数`statSync()`。



### Stream

`stream`是Node.js提供的一个仅在服务区端可用的模块，目的是支持“流”这种数据结构。

数据按照一定顺序不间断的从一个地方到另一个地方，就形成了“流”。

在Node.js中，“流”也是一个对象，我们可以通过响应它的事件来在不同阶段执行代码：

创建一个`readStream`：

```javascript
// 从文件中读取数据流
const rs = fs.createReadStream('./Node.md', 'utf-8');
// 当读取数据流时，触发data方法，返回值为读取到的数据
rs.on('data', function (data) {
    console.log('DATA');
    console.log(data);
});
// 当全部数据读取完毕时，触发end方法
rs.on('end', function () {
    console.log('END');
});
// 当发生错误时触发error方法，返回错误信息
rs.on('error', function (err) {
    console.log('ERR');
    console.log(err);
});
```

创建一个`writeStream`：

```javascript
// 创建一个可写入数据的流，指定输入文件和格式
const ws = fs.createWriteStream('write.md', 'utf-8');
// 通过不断调用write方法可以连续的向文件中写入数据
ws.write('xxx是大帅比 \n');
ws.write('xxx是大美女 \n');
ws.write('他们可爱的宝宝叫xxx \n');
// 输入完毕，调用end方法关闭流
ws.end();
// 调用end方法后不能再次调用write方法，否则会报语法错误
```

所有可以读取数据的流都继承自`stream.Readable`，所有可以写入的流都继承自`stream.Writable`。

#### pipe

将一个`Readable`流和一个`Writable`流串起来后，所有的数据自动从`Readable`流进入`Writable`流，这种操作叫做`pipe`。

在Node.js中，`Readable`流有一个`pipe()`方法，可以传入一个`Writable`流，这样就可以把源文件的数据写入到目标文件里了：

```javascript
// 创建Readable流，指定源文件
const rs = fs.createReadStream('./Node.md');
// 创建Writable流，指定目标文件
const ws = fs.createWritStream('./write.md');
// 通过Readable流调用pipe方法，向目标文件传输数据
rs.pipe(ws);
// 默认情况下，Readable流的end事件触发后，会自动关闭Writable流。如果不想自动关闭，可以在pipe方法中传入第二个参数{end: false}
// rs.pipe(ws, {end: false})
```



### http

创建一个可以运行的服务器程序，需要依赖Node.js的`http`模块：

```javascript
const http = require('http');
```

通过http对象可以定义接收客户端请求和响应请求的方法：

```javascript
http.createServer(function (request, response) {
    // request对象包含请求的信息
    console.log(request);
    // response对象可以设置响应信息
	// 设置响应头，包括状态码及其他的参数
	response.writeHead(200, {'Content-Type': 'text/plain'});
	// 设置响应内容，格式为string或者buffer
	response.write('Hello World!');
	// 响应结束
	response.end();
});
```

调用`http`对象的`listen`方法可以监听指定端口：

```javascript
http.listen(8080);
```

当浏览器访问`localhost:8080`端口时，服务器会响应请求，并且返回`Hello World!`给浏览器。

### url

服务器端接收到客户端的请求时，`request`对象中的`url`属性包含请求地址，通过`url`模块的`parse()`方法可以将URL解析成对象。这个对象包含以下信息：

```javascript
Url {
  protocol: null,
  slashes: null,
  auth: null,
  host: null,
  port: null,
  hostname: null,
  hash: null,
  search: null,
  query: null,
  pathname: '/',
  path: '/',
  href: '/' 
}
```

对不同的URL地址进行不同的处理，负责这个功能的模块就叫做路由`router`。



### child_process

