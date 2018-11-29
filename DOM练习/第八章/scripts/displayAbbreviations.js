/**
 * Created by 37097 on 2017/4/23.
 */


function displayAbbreviations() {
    //检查兼容性，不支持下面任何一种DOM方法，退出函数
    if (!document.getElementsByTagName) return false;
    if (!document.createElement) return false;
    if (!document.createTextNode) return false;
    //上面三句也可以合写成：
    //if (!document.getElementsByTagName || !document.createElement || !document.createTextNode) return false;
    var abbreviations = document.getElementsByTagName("abbr");
    if (abbreviations.length < 1) return false;  //如果当前文档没有abbr元素，函数终止；
    var defs = new Array();
    for(var i=0;i<abbreviations.length;i++) {
        var current_abbr = abbreviations[i];
        //因为IE6不支持abbr标签，所以要做判断：如果当前元素没有子节点，立刻开始下一次循环
        if (current_abbr.length < 1) {
            continue;
        }
        var definition = current_abbr.getAttribute("title");
        var key = current_abbr.lastChild.nodeValue;  //获取abbr元素节点中的文本;
        defs[key] = definition;  //把key用作数组元素的下标，definition用作数组元素的值
    }
    var dlist = document.createElement("dl");  //创建一个dl标签
    for(key in defs) {  //遍历defs数组，每次循环，defs的下标都会赋予变量key
        var definition = defs[key];    //取得下标为key对应的值
        var dtitle = document.createElement("dt");  //创建dt元素
        var dtitle_text = document.createTextNode(key);  //用变量key的值去创建一个文本节点
        dtitle.appendChild(dtitle_text);  //将文本节点添加到dt元素中去
        var ddesc = document.createElement("dd");
        var ddesc_text = document.createTextNode(definition);
        ddesc.appendChild(ddesc_text);
        dlist.appendChild(dtitle);
        dlist.appendChild(ddesc);   //将创建好的dt和dd标签添加到dl中去
    }
    var header = document.createElement("h2");  //创建一个h2标题
    var header_text = document.createTextNode("Abbreviations"); //创建一个内容为Abbreviations的文本节点
    header.appendChild(header_text);  //把文本添加到h2标签中
    document.body.appendChild(header);  //把h2标签添加到body中
    document.body.appendChild(dlist);  //把dl标签添加到body中
}
//在页面加载时调用
addLoadEvent(displayAbbreviations);  //注意函数参数不要加括号



