const http = require('http');

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type':'text/plain; charset=utf-8'});
    if (request.method === 'POST') {
        let body = '';
        request.on('data', (chunk) => { body += chunk; });
        request.on('end', () => {
            let parm = JSON.parse(body);
            //сигнализирует серверу, что заголовки и тело ответа установлены, в итоге ответ отсылается клиента.
            // Данный метод должен вызываться в каждом запросе.
            if (parm.login === 'Test' && parm.password === 'test') {
                response.end('Status: OK.');
            }
            else {
                response.end('Status: not OK.');
            }
        });
    }
}).listen(3000);

console.log('Server running at http://localhost:3000/');
