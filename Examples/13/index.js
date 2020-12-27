const http = require('http');
const fs = require('fs');
const url = require('url');
let qs = require('querystring');

http.createServer(function (request, response) {
	if(url.parse(request.url).pathname === '/fetch') {
        let html = fs.readFileSync('fetch.html');
        response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        response.end(html);
    }
	if (request.method === 'POST') {
        let body = 'Hello, ';
        request.on('data', (data) => { body += data.toString(); });
        request.on('end', () => {
            console.log(body);
            response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
            response.end(body);
        });
    }
}).listen(5000);

console.log('Server running at http://localhost:5000/fetch');
