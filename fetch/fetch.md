## 传统AJAX

### XMLHttpRequest

在javascript中，我们一般使用XMLHttpRequest（XHR）来执行异步请求。一般请求的步骤如下：

首先创建一个XHR对象：

```javascript
var request;

if (window.XMLHttpRequest) { // Mozilla, Safari, ...
  request = new XMLHttpRequest();
} else if (window.ActiveXObject) { // IE
  try {
    request = new ActiveXObject('Msxml2.XMLHTTP');
  } 
  catch (e) {
    try {
      request = new ActiveXObject('Microsoft.XMLHTTP');
    } 
    catch (e) {}
  }
}
```

由于XHR在浏览器中有兼容性，低版本IE中使用ActiveXObject创建，所以需要通过判断语句来创建XHR对象。

然后通过XHR对象来初始化请求：

```javascript
var url = location.href;
response.open('get', url, true);
```

通过`response.open()`方法来初始化请求，类型为`get`，`true`表示异步请求。

再定义回调函数，当`response.readyState`属性发生变化的时候就会触发`onreadystatechange`事件并执行这个回调函数：

```javascript
response.onreadystatechange = function () {
    if(response.readyState === XMLHttpRequest.DONE && response.status === 200) {
        // 当请求成功后执行
    }
}
```

设置完毕，这时候就可以发送请求了：

```javascript
response.send();
```

如果想取消请求，则可以使用XML对象的`abort`方法，但是这种方法存在兼容性，只能在IE浏览器中生效：

```javascript
response.abort();
```

在实际工作中我们一般不会写这么繁琐的原生语法，用的比较多的恐怕就是jQuery的AJAX了。



### jQuery Ajax

jQuery作为一个javascript的类库，已经帮我们封装好了很多很好用的方法，并且语法也简洁了很多，也不用写很复杂的兼容判断语句了。于是当我们想发送ajax请求的时候，代码就变成了下面这个样子：

```javascript
$.ajax({
	url: location.href,
	type: 'get',
	dataType: 'text',
	data: {},
	success: function (res) {
		// 请求成功后的回调
	},
	error: function (res) {
		// 请求失败后的回调
	}
});
```

或者更直接点，像这样：

```javascript
$.get(url, {name: 'gao'}, function (data) {
    // after success...
})
```

但是，jQuery Ajax本质上还是使用了XMLHttpRequest对象，只不过是做了更进一步的封装，方便设置和调用。

那么有没有更简单更好用的发送请求的解决方案呢？答案是有，比如`fetch`。



## Fetch

### 使用方法

用fetch发送请求非常简单，只需要这样：

```javascript
fetch(url, options).then(response => {
	return response.json();
}).then(data => {
    // 处理返回的数据
})
```

`fetch`是window的一个全局变量，因此使用时直接调用`fetch()`就可以了。

第一个参数`url`是必须的，表明你要请求的地址，第二个参数`options`是可选的，里面配置你的请求方法等参数，具体如下：

```javascript
{
    method: 'get', 			// 请求方法
    headers: Headers/string	 // 请求头信息，为一个Headers对象或者string
    body: string,		    // 请求主体，在这定义请求时携带的传参，可以是一个Blob(二进制)/FormData/URLSearchParams/JSONString等。GET或HEAD方法不能包含body信息。
    mode: 'cors',			// 请求模式，如cors/no-cors/same-origin
    credentials: 'include',	 // 请求的证书，如omit/same-origin/include
    cache: default, 		 // 请求的缓存模式，如default/no-store/reload/no-cache/force-cache/only-if-cached
}
```

### Promise

当调用了`fetch()`方法时，它会向指定的地址发送请求获取资源。这个方法返回一个`promise`对象，这个`promise`对象会在请求响应后`resolve`，并传回给`Response`对象。当遇到网络错误时，`fetch`返回的`promise`会被`reject`，并传回给`TypeError`。

关于Promise的相关内容请看ES6中的Promise，这里就不展开介绍了。

完整的`fetch`使用方法如下：

```javascript
fetch(url, options)
	.then(response => {
		// 请求被成功响应后，会返回一个response对象，利用这个对象可以将数据转换为我们需要的格式，比如json，或者text等等。
        return response.json();
	})
	.then(data => {
        // 这里可以拿到我们需要的数据，可以对其进行处理了
	})
	.catch(e => {
		// 如果遇到网络错误，或者前面的步骤中代码出错，都会进入catch中，通过e对象可以获取错误信息等
	})
    .then(() => {
    	// 不管请求成功或者失败，都可以再加一个then来执行后续步骤
	})
```

