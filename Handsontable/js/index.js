// var persistent = require("../node_modules/handsontable/commonjs/plugins/persistentState/persistentState.js");
//
// console.log(persistent);

var data = (function () {
    const arr = [];
    for (let i  = 0; i < 15; i ++) {
        arr[i] = [];
        for (let j = 0; j < 26; j ++) {
            arr[i][j] = null;
        }
    }
    return arr;
})();

var container = document.getElementById("table");


var hot = new Handsontable(container, {
    data: data,
    colHeaders: true,
    rowHeaders: true,
    afterChange: function (change, source) {
    
    },
    persistentState: true,
});


