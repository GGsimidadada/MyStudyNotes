/**
 * Created by 37097 on 2017/4/23.
 */

//不同版本的IE以及其他浏览器使用的XMLHTTP对象不同，为了兼容所有浏览器，使用下面函数
function getHTTPObject() {
    //判断是否为IE浏览器
        if (typeof XMLHttpRequest === "undefined") {
        XMLHttpRequest = function () {
            try { return new ActiveXObject("Msxml2.XMLHTTP.6.0"); }
                catch (e) {}
            try { return new ActiveXObject("Msxml2.XMLHTTP.3.0"); }
                catch (e) {}
            try { return new ActiveXObject("Msxml2.XMLHTTP"); }
                catch (e) {}
            return false;
        }
    }
    //如果不是IE浏览器，返回 new XMLHttpRequest();
    return new XMLHttpRequest();
}
