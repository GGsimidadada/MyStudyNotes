/**
 * Created by 37097 on 2017/4/23.
 */

//如果浏览器支持XMLHttpRequest对象，用以下函数完成异步加载
function getNewContent() {
    //变量request用来保存getHTTPObject()函数的返回值
    var request = getHTTPObject();
    //判断是否支持支持XMLHttpRequest
    if (request) {
        //XMLHttpRequest对象的open方法，使用GET请求类型，以异步方式发送和处理example.txt内的文本
        request.open("GET","scripts/example.txt",true);  //第三个变量用于指定请求是否以异步方式发送和处理
        //onreadystatechange是一个事件处理函数
        request.onreadystatechange = function () {
            //当readyState的值为4时，表示响应已经完成，可以处理服务器发送回来的数据
            if (request.readyState === 4) {
                //创建一个p元素节点
                var para = document.createElement("p");
                //创建一个文本节点，从XMLHttpRequest的responseText属性中获取文本数据
                var txt = document.createTextNode(request.responseText);
                //把文本数据放入p元素节点中
                para.appendChild(txt);
                //将p元素节点添加到文档中id为new的div标签中
                document.getElementById('new').appendChild(para);
            }
        };
        //用send方法发送请求
        request.send(null);
    } else {
        alert('Sorry, your browser doesn\'t support XMLHttpRequest');
    }
}
addLoadEvent(getNewContent);