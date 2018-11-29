/**
 * Created by 37097 on 2017/4/24.
 */
function displayCitations() {
    var quotes = document.getElementsByTagName("blockquote"); //得到所有blockquote元素
    for (var i=0;i<quotes.length;i++) {  //遍历集合
        if (!quotes[i].getAttribute("cite")) {  //判断第i个blcokquote元素有没有定义cite属性
            continue;   //如果没有定义，继续下次循环
        }
        var url = quotes[i].getAttribute("cite");
        var quoteChildren = quotes[i].getElementsByTagName("*");  //返回quotes[i]中所有的元素节点
        if (quoteChildren.length < 1) {  //如果quotes内没有元素节点，退出循环
            continue;
        }
        //获取最后一个元素节点
        var elem = quoteChildren[quoteChildren.length-1];
        //链接连接标签
        var link = document.createElement("a");
        link.setAttribute("href",url);
        var linkText = document.createTextNode("source");
        link.appendChild(linkText);
        var superscript = document.createElement("sup");
        superscript.appendChild(link);
        //把标记添加到引用中的最后一个元素节点
        elem.appendChild(superscript);
        
        
        
    }
}

addLoadEvent(displayCitations);