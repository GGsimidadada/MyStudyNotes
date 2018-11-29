/**
 * Created by 37097 on 2017/5/24.
 */
function positionEvent(elementID, delayTime) {
    var targetX = Math.ceil(Math.random()*1300);
    var targetY = Math.ceil(Math.random()*600);
    movetime = setTimeout(function () {
        moveElement(elementID, targetX, targetY, 10);
    },delayTime);
}