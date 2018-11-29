'use strict';

const fs = require('fs');

/* fs.stat('./Node.md', function (err, stat) {
    if (err) {
        console.log(err);
    }
    else {
        console.log(stat);
        console.log(stat.isFile());
        console.log(stat.isDirectory());
    }
}); */

/* const rs = fs.createReadStream('./Node.md', 'utf-8');
rs.on('data', function (chunk) {
    console.log('DATA');
    console.log(chunk);
});
rs.on('end', function () {
    console.log('END');
})
rs.on('error', function (err) {
    console.log('ERR');
    console.log(err);
}) */

/* const ws = fs.createWriteStream('write.md', 'utf-8');
ws.write('高浩然是大帅比 \n');
ws.write('李怡萱是大美女 \n');
ws.end();
ws.write('他们可爱的宝宝叫高艾萱 \n'); */

const rs = fs.createReadStream('./Node.md');
const ws = fs.createWriteStream('./write.md');
rs.pipe(ws);
