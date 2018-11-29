Axios是一个基于promise的HTTP库，可以用在浏览器和node.js中。

### 特性

1. 从浏览器中创建XMLHttpRequests
2. 从node.js创建http请求
3. 支持Promise API
4. 拦截请求和响应数据
5. 取消请求
6. 自动转换JSON数据
7. 客户端支持防御XSRF

### 兼容性

IE不支持，FF 60+，Chrome 66+，Edge 10+， Safari 10+

### 安装

1. ```
   npm install axios
   ```

2. ```
   <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
   ```

### API

引入JS后，则可以使用`axios`变量来发送请求，可以向`axios`传递相关配置来创建请求。

语法：

```javascript
axios({
    method: 'post',			// 请求类型
    url: '/user',			// 请求地址
    data: {					// 携带参数
        id: '1'				
    }
})
```

如果只传递地址，则默认使用`get`方法：

```javascript
axios({
    method: 'get',			// 请求类型
    url: '/user',			// 请求地址
    data: {					// 携带参数
        id: '1'				
    }
});
// 上面的方法等同于下面：
axios('/user', {
    params: {				// 当请求类型是get时，传参要写在params: {}里
        id: '1'
    }
});
// 或者这样：
axios.get('/user', {
    params: {
        id: '1'
    }
});
// 也可以这样：
axios('/user?id=1');
```

请求类型可以使用如下的简写方式（类似jQuery），使用这种语法时，配置对象中不必再设置`url`和`method`：

```javascript
axios.get(url[, config]);
axios.delete(url[, config]);
axios.head(url[, config]);
axios.post(url[, data[, config]]);
axios.put(url[, data[, config]]);
axios.patch(url[, data[, config]]);
```

其中，使用`get`请求时，传递的参数可以直接写在`url`后面，也可以写在`config`的`params`属性中。使用`post`请求时，参数需写在`data`的位置：

```javascript
// get请求
axios.get('/user', {
    params: {
        id: '1'
    }
});

// post请求
axios.post('/user', {
    id: '1'
});
```



### 并发

`axios`可以一次性发送多个请求：

```javascript
axios.all(iterable);		// 发送多个请求
axios.spread(callback);		// 多个请求完成后执行callback函数
```

例如，想同时发送两个请求，并且两个请求都完成后执行函数：

```javascript
function getImg() {
            return axios.get('/img.jpg');
}
function getMd() {
	return axios.get('/axios.md');
}
        
axios.all([getImg(), getMd()])
	.then(axios.spread((imgResponse, mdResponse) => {
		// 两个请求都完成后，打印两个请求对象
		console.log([imgResponse, mdResponse]);
	}));
```

但是如果有请求发生错误，则不会执行`axios.spread`函数，会进入`catch`函数。

### 创建实例

可以使用自定义配置新建一个`axios`实例：`axios.create([config])`。

```javascript
var instance = axios.create({
    baseURL: 'https://sgwl.com/api/',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
});
```

使用这个方法可以创建一个指定配置的`axios`实例对象，这个对象可以使用`get` `post`等方法快速创建请求，如果在方法中定义了配置项，则会和实例的默认配置项合并。

`asiox.create()`创建出的实例对象不能使用`.all()`和`.spread()`方法。

### 请求配置

```javascript
{
	// url: 用于请求的服务器URL
    url: '/user', 	
    
    // baseURL: 将自动加在url前面，除非url是一个绝对路径
    // 为axios实例的方法传递相对URL
    baseURL: 'https://sgwl.com/', 
    
    // method: 创建请求时使用的方法，默认是get
    method: 'get', 	
    
    // transformRequest: 允许在向服务器发送前，修改请求数据
    // 只能用在 put, post, patch 这几个方法中
    // 数组中的函数必须返回字符串，ArrayBuffer或Stream
    transformRequest: [function(data) {
       // 在这对data进行处理
       return data;
    }],
    
    // transformResponse: 在传递给then/catch之前，可以修改响应数据
    transformResponse: [function(data) {
        // 在这对响应数据进行处理
        return data;
    }],
    
    // headers: 自定义请求头
    headers: {'X-Resquested-Width': 'XMLHttpRequest'},
    
    // params: 即将与请求一起发送的URL参数
    // 必须是一个无格式对象(plain object)或 URLSearchParams对象
    params: {
        ID: 'XXX'
    },
    
    // data: 作为请求主体被发送的数据
    // 只适用于put post patch 请求
    // 在没有设置transformRequest时，必须是以下类型之一：
    // - string, plain object, ArrayBuffer, ArrayBufferView, URLSearchParams
    // - 浏览器专属： FormData, File, Blob
    // - Node专属： Stream
    data: {
        name: 'gao'
    }
    
    // timeout: 指定请求超时的毫秒数（0 表示无超时时间）
    // 如果请求超过这个时间，请求会被中断
    timeout: 1000,
    
    // withCredentials: 跨域时请求时是否需要使用凭证
    withCredentials: false,   //默认 false
    
    // adapter: 允许自定义处理请求，以使测试更轻松
    // 返回一个promise并应用一个有效的响应
    adapter: function (config) {
        /* ... */
    },
    
    // auth: 使用HTTP基础验证，并提供凭据
    // 这将设置一个 Authorization 头。覆盖掉现有的任意使用 headers 设置的自定义 Authorization 头
    auth: {
        username: 'gao',
        password: '123456'
    },
    
    // responseType: 服务器响应的数据类型，可以是'arraybuffer', 'blob', 'document', 'json', 'text', 'stream'
    responseType: 'json',    //默认的
    
    // cancelToken: 指定用于取消请求的 cancel token
    cancelToken: new CancelToken(function (cancel) {
        /* ... */
    })
}
```

### 响应结构

请求的响应包含下面的信息：

```
{
    // data: 服务器提供的响应
    data: {},
    
    // status: 来自服务器响应的HTTP状态码
    status: 200,
    
    // statusTextt: 来自服务器响应的HTTP状态信息
    statusText: 'OK',
    
    // headers: 服务器的响应头
    headers: {},
    
    // config: 为请求提供的配置信息
    config: {}
}
```

### 配置的默认值 defaults

可以为所有请求配置默认值

```javascript
// 为全局的axios配置默认值
axios.defaults.baseURL = 'https://sgwl.com';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// 为自定义实例修改默认值
var instance = axios.create({
    baseURL: 'http://sgwl.com'
});
instance.defaults.baseURL = 'http://baidu.com';  // 可以修改之前设置的配置
```

### 配置的优先顺序

配置会以一个优先顺序进行合并。这个顺序是：在 `lib/defaults.js` 找到的库的默认值，然后是实例的 `defaults` 属性，最后是请求的 `config` 参数。后者将优先于前者。 

```javascript
// 使用由库提供的配置的默认值来创建实例
// 此时超时配置的默认值是 `0`
var instance = axios.create();

// 覆写库的超时默认值
// 现在，在超时前，所有请求都会等待 2.5 秒
instance.defaults.timeout = 2500;

// 为已知需要花费很长时间的请求覆写超时设置
instance.get('/longRequest', {
  	timeout: 5000
});
```

注意，如果使用的是`axios.post(url[, data[, config]])`类似这种可以单独传`data`值的方法，会将第二个参数`data`中的项与`config`中`data`参数的项合并，如果有重复，前者的项会覆盖后者的项。

```javascript
// 创建实例，初始 name 为 1
var instance = axios.create({
    data: {name: '1'}
});
// 通过 defaults.data 重新设置 name 为 2
instance.defaults.data = {name: '2'};
// 发送 post 请求，其中第二个参数 data 中的 name 为 3 ,第三个参数中的 data 与第二个参数合并，并且 name 被覆盖，最终 data 为{ name: '3', title: '哈哈' }
instance.post('/axios.md', {name: '3'}, {
	data: {name: '4', title: '哈哈'}
});
// 最后发送的数据是： name: '3'    title: '哈哈'
```

### 拦截器

在请求或响应被`then`或者`catch`处理前拦截它们：

```javascript
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });
```

移除拦截器：

```javascript
var myInterceptor = axios.interceptors.request.use(function () {/*...*/});
axios.interceptors.request.eject(myInterceptor);
```

为`axios`的自定义实例添加拦截器：

```javascript
var instance = axios.create();
instance.interceptors.request.use(function () {/*...*/});
```

### 错误处理

当请求失败或者发生错误时，会被`then`的第二个参数函数捕获，或者被`catch`捕获，参数为`error`对象。

`error`对象有如下属性：

```javascript
error.config: 请求发送时的配置项对象
error.request: 请求信息对象
error.response: 响应对象，属性和成功时的response一致
error.message: 报错信息
error.stack: 控制台默认输出的报错信息，含有具体错误所在的文件和代码行等
```

```javascript
axios.get('/user/12345')
  .catch(function (error) {
    if (error.response) {
      // 请求已发出，但服务器响应的状态码不在 2xx 范围内
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else {
      // 请求未发出就发生错误
      console.log('Error', error.message);
    }
    console.log(error.config);
  });
```

可以使用 `validateStatus` 配置选项定义一个自定义 HTTP 状态码的错误范围：

```javascript
axios.get('/user/12345', {
  validateStatus: function (status) {
    return status < 500; // 状态码在大于或等于500时才会进入报错函数
  }
})
```

### 取消请求

使用`cancel token`取消请求。

可以使用`CancelToken.source`工厂方法创建cancel token：

```javascript
var CancelToken = axios.CancelToken;
var source = CancelToken.source();

axios.get('/user/12345', {
  cancelToken: source.token
}).catch(function(thrown) {
  if (axios.isCancel(thrown)) {
    console.log('Request canceled', thrown.message);
  } else {
    // 处理错误
  }
});

// 取消请求（message 参数是可选的）
source.cancel('Operation canceled by the user.');
```

还可以通过传递一个executor函数到`CancelToken`的构造函数来创建cancel token：

```javascript
var CancelToken = axios.CancelToken;
var cancel;

axios.get('/user/12345', {
  cancelToken: new CancelToken(function executor(c) {
    // executor 函数接收一个 cancel 函数作为参数
    cancel = c;
  })
});

// 取消请求
cancel();
```

给不同的请求绑定同一个cancel token时，调用cancel token的cancel方法，可以达到同时取消多个请求的目的。

```javascript
var CancelToken = axios.CancelToken;
var source = CancelToken.source();

console.log(source);
axios.get('/img.jpg', {
		cancelToken: source.token
	}).catch(aa => {
    	if (axios.isCancel(aa)) {
			console.log(aa.message);
		}
	});

axios.get('/axios.md', {
		cancelToken: source.token
	}).catch(aa => {
		if (axios.isCancel(aa)) {
			console.log(aa.message);
		}
	});

// 调用方法可以同时取消两个请求
source.cancel('请求已取消');
```



