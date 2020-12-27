const http = require('http');
const url = require('url');

let data = require('./EventEmitter');
let count = new data.ModifyCount();

count.on('get', function (request, response) {
    console.log('Count: ' + count.get());
    response.end('Ok');
});

count.on('plus', function (request, response) {
    console.log('Count: ' + count.plus());
    response.end('Ok');
});

count.on('minus', function (request, response) {
    console.log('Count: ' + count.minus());
    response.end('Ok');
});

http.createServer(function (request, response) {
    if(url.parse(request.url).pathname === '/count' && request.method === 'GET') {
        let method = url.parse(request.url, true).query.method;
        console.log('-Event: ' + method);
        count.emit(method, request, response);
    }
}).listen(5000);
