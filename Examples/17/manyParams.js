const http = require('http');
const url = require('url');

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
     if (url.parse(request.url).pathname === '/parameters') {
         let result = '';
         let q = url.parse(request.url, true).query;
         for (key in q) {
             result += `${key} = ${q[key]}<br/>`;
         }

         response.end(result);
     }
}).listen(5001);

/*Не существует конкретной максимальной величины GET-запроса.
Один сервер может принимать максимум 8 Кб, а другой — 16 Кб.
Средний размер запроса колеблется в пределах 512-1024 Кб.

Фактически в одном таком запросе должно быть не больше 5 параметров,
иначе каждый из них будет сложно контролировать со стороны сервера и браузера.
Если нужно передать большое количество информации, рекомендуется использовать метод POST.
*/

console.log('Server running at http://localhost:5001/parameters?x=1&&y=5&&c=qwerty&&str=3657654&&nh=dfbr83fbue');
