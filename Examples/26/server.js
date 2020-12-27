const http = require('http');

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-type': 'application/json; charset=utf-8'});
    if (request.method === 'POST' ) {
        let body = '';
        request.on('data', (chunk) => { body += chunk; });
        request.on('end', () => {
            try {
                body = JSON.parse(body);
                let jsonResponse = {};
                jsonResponse.comment = 'Response: ' + body.comment;
                jsonResponse.x_plus_y = body.x + body.y;
                jsonResponse.str = body.str + '!';

                response.end(JSON.stringify(jsonResponse));
            }
            catch (e) {
                console.error(e);
                response.end('I can see that it\'s not JSON')
            }
        });
    }
}).listen(5000);

console.log('Server running at http://localhost:5000/');
