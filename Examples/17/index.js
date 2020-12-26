const http = require('http');
const url = require('url');

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
    //Метод принимает строку URL, анализирует ее и возвращает объект URL
    //1. Строка URL для синтаксического анализа.
    //2. Если true, то свойство query всегда будет установлено на объект, возвращаемый методом parse() модуля querystring.
    if (url.parse(request.url).pathname === '/parameter') {
        let x = +url.parse(request.url, true).query.x;
        let y = +url.parse(request.url, true).query.y;
        if(Number.isInteger(x) && Number.isInteger(y)) {
            response.end('<h1>X and Y are int</h1>'
                + `<p>x = ${x}, y = ${y}</p>`
                + `<p>x + y = ${x + y}</p>`
                + `<p>x - y = ${x - y}</p>`
                + `<p>x * y = ${x * y}</p>`
                + `<p>x / y = ${x / y}</p>`
            );
        }
        else {
            console.error('Incorrect parameter');
            response.end('<h1>Incorrect parameter</h1>');
        }
    }
}).listen(5000);

console.log('Server running at http://localhost:5000/parameter?x=1&&y=5');
