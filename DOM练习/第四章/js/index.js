/**
 * Created by 37097 on 2017/4/17.
 */

function showPic(whichpic) {
    var source = whichpic.getAttribute("href");//获取目标链接的图片路径并存入变量
    var placeholder = document.getElementById("placeholder");//获取占位图片
    placeholder.setAttribute("src", source);//将占位图片的路径改为目标链接的图片路径
    var text = whichpic.getAttribute("title"); //选中图片title属性值
    var description = document.getElementById("description"); //选中p标签
    description.firstChild.nodeValue = text; //获取p标签内文本
    //change = text;  //用图片的title把p标签文本替换  为什么这种写法不行？
    return false;
    
}

/*window.onload  =  function () {
    var body_element = document.getElementsByTagName("body")[0];//获取页面中名为body的元素数组
    alert(body_element.childNodes.length);//弹出body元素的所有子元素数组的长度
    alert(body_element.nodeType);//弹出body的节点属性
}*/


