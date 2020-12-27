const http = require('http');
const url = require('url');

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type':'text/plain; charset=utf-8'});
    if (url.parse(request.url).pathname === '/parameter') {
        let x = +url.parse(request.url, true).query.x;
        let y = +url.parse(request.url, true).query.y;
        if(Number.isInteger(x) && Number.isInteger(y)) {
            response.end('X and Y are int\n'
                + `x = ${x}, y = ${y}\n`
                + `x + y = ${x + y}\n`
                + `x - y = ${x - y}\n`
                + `x * y = ${x * y}\n`
                + `x / y = ${x / y}\n`
            );
        }
        else {
            console.error('Incorrect parameter');
            response.end('Incorrect parameter');
        }
    }
}).listen(5000);

console.log('Server running at http://localhost:5000/');
