const http = require('http');

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type':'text/plain; charset=utf-8'});
    if (request.method === 'POST') {
        let body = '';
        request.on('data', (chunk) => { body += chunk; });
        request.on('end', () => {
            try {
                //Метод JSON.parse() разбирает строку JSON,
                // возможно с преобразованием получаемого в процессе разбора значения.
                let parm = JSON.parse(body);
                if (parm.login === 'Test' && parm.password === 'test') {
                    response.end('Status: OK.');
                } else {
                    response.end('Status: not OK.');
                }
            }
            catch (e) {
                console.error(e);
                response.end('I can see that it\'s not JSON');
            }
        });
    }
}).listen(5002);

console.log('Server running at http://localhost:5002/');
