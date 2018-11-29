/**
 * Created by 37097 on 2017/4/23.
 */


function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    }else {
        window.onload = function() {
            oldonload();
            func();
        }
    }
}