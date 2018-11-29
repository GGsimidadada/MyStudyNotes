/**
 * Created by 37097 on 2017/4/24.
 */


function displayAccessKeys() {
    if (!document.getElementsByTagName || !document.createElement || !document.createTextNode) {
        return false;
    }
    var links = document.getElementsByTagName("a");
    var akeys = new Array();
    for(var i=0;i<links.length;i++) {
        var link = links[i];
        var key = link.getAttribute("accesskey");
        if (!key) {
            continue;
        }
        var linkText = link.lastChild.nodeValue;
        
    }
}