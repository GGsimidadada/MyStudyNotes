const querystring = require('querystring');
const formidable = require('formidable');
const fs = require('fs');

function start(response, request) {
    console.log('Request handler start was called');
    const body = '<html>' +
        '<head>' +
        '<meta http-equiv="Content-Type" ' +
        'content="text/html; charset=UTF-8" />' +
        '</head>' +
        '<body>' +
        '<form action="/upload" enctype="multipart/form-data" ' +
        'method="post">' +
        '<input type="file" name="upload">' +
        '<input type="submit" value="Upload file" />' +
        '</form>' +
        '</body>' +
        '</html>';

    response.writeHead(200, {
        'Content-Type': 'text/html'
    });
    response.write(body);
    response.end();
}

function upload(response, request) {
    console.log('Request handler upload was called');

    const form = new formidable.IncomingForm();
    // 默认的临时文件夹与目标文件不在同一个磁盘下，会出现权限问题，因此重新指定临时文件夹
    form.uploadDir = 'tmp';
    
    form.parse(request, function (err, fields, files) {
        console.log('parsing done');
        console.log(files.upload.path);
        // 给文件重命名，同步操作
        fs.renameSync(files.upload.path, './tmp/test.jpg');
        response.writeHead(200, {
            'Content-Type': 'text/html'
        });
        response.write('received image:<br/>');
        response.write('<img src="/show" />');
        response.end();
    });
}

function show(response, request) {
    console.log("Request handler 'show' was called.");
    fs.readFile('./tmp/test.jpg', "binary", function (err, file) {
        if (err) {
            response.writeHead(500, {
                'Content-Type': 'text/plain'
            });
            response.write(err + '\n');
            response.end();
        } else {
            response.writeHead(200, {
                'Content-Type': 'image/jpg'
            });
            response.write(file, 'binary');
            response.end();
        }
    });
}

exports.start = start;
exports.upload = upload;
exports.show = show;