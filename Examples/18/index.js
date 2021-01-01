const http = require('http');
const url = require('url');

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
    //Метод regexp.test(str) ищет совпадение и возвращает true/false, в зависимости от того, находит ли он его.
    if(RegExp(/^\/parameter\/[\d]{1,100}\/[\d]{1,100}/).test(url.parse(request.url).pathname)) {
        let p = url.parse(request.url, true);
        x = +p.pathname.split('/')[2];
        y = +p.pathname.split('/')[3];

        response.end('<h1>X and Y are int</h1>'
            + `<p>x = ${x}, y = ${y}</p>`
            + `<p>x + y = ${x + y}</p>`
            + `<p>x - y = ${x - y}</p>`
            + `<p>x * y = ${x * y}</p>`
            + `<p>x / y = ${x / y}</p>`);
    }
    else {
        console.error('Incorrect parameter');
        response.end('<h1>Incorrect parameter</h1>');
    }
}).listen(5000);

console.log('Server running at http://localhost:5000/parameter/1/5');
