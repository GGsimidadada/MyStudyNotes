/**
 * Created by 37097 on 2017/5/24.
 */
function moveElement(elementID, targetX, targetY, interval) {
    if (!document.getElementById) return false;
    if (!document.getElementById(elementID)) return false;
    var elem = document.getElementById(elementID);
    var currentX = parseInt(elem.style.left);
    var currentY = parseInt(elem.style.top);
    if (currentX === targetX && currentY === targetY) return true;
    if (currentX < targetX) currentX++;
    if (currentX > targetX) currentX--;
    if (currentY < targetY) currentY++;
    if (currentY > targetY) currentY--;
    console.log(currentX);
    console.log(currentY);
    elem.style.left = currentX + "px";
    elem.style.top = currentY + "px";
    movetime = setTimeout(function () {
        moveElement(elementID, targetX, targetY, interval);
    }, interval);
}