const http = require('http');
const url = require('url');

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
    if (request.method === 'GET') {
        let result = '';
        url.parse(request.url, true).pathname.split('/')
            .forEach(e => { result += `${e}<br/>`});

        //Существует стандарт RFC3986, который определяет список разрешённых и запрещённых символов в URL.
        //Запрещённые символы, например, нелатинские буквы и пробелы,
        // должны быть закодированы – заменены соответствующими кодами UTF-8 с префиксом %.
        //К счастью, объекты URL делают всё это автоматически.

        // JavaScript метод decodeURI() декодирует URI
        // (англ. Uniform Resource Identifier – унифицированный идентификатор ресурса),
        // ранее созданный функцией encodeURI(), или другим подобным способом.
        decodeURI(url.parse(request.url, true).pathname).split('/')
            .forEach(e => { result += `${e}<br/>`});
        response.end(result);
    }
}).listen(5001);

console.log('Server running at http://localhost:5001/HELP');
