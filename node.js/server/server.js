'use strict';

const http = require('http');
const url = require('url');

function start(route, handle) {
	function onRequest(request, response) {
		const pathname = url.parse(request.url).pathname;

		route(handle, pathname, response, request);
	}
	http.createServer(onRequest).listen(8000);
	console.log('Server has started');
}

exports.start = start;