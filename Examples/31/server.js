const http = require('http');
const url = require('url');
const WebSocket = require('ws');

http.createServer(function(request, response) {
    if(url.parse(request.url).pathname === '/start' && request.method === 'GET') {
        response.writeHead(200, {'Content-Type': 'text/html; charset = utf-8'});
        response.end(require('fs').readFileSync('./client.html'));
    }
    else {
        response.writeHead(404, {'Content-Type': 'text/html; charset = utf-8'});
        response.end('<h1>404<h1>');
    }
}).listen(3000);

let k = 0;

const wsserver = new WebSocket.Server({ port: 4000, host: 'localhost', path: '/wsserver'});
wsserver.on('connection', (ws) => {
    ws.on('message', message => {
        console.log(`client: ${message}`);
    });
    setInterval(() => { ws.send('Ok'); }, 1000);
    setTimeout(() => { wsserver.close(console.log('wssocket close')); }, 15000);
});

wsserver.on('error', (err) => { console.log('wsserver error', err)} );
console.log(`wsserver: host:${wsserver.options.host}, 
            port:${wsserver.options.port}, 
            path:${wsserver.options.path}`);
