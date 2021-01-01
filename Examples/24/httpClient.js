const http = require('http');
const query = require('querystring');

let parms = query.stringify({x: 1, y: 5});
let path = `/parameter?${parms}`;
let options = {
    host: 'localhost',
    path: path,
    port: 5000,
    method: 'GET'
};

//Node.js поддерживает несколько подключений на сервер, чтобы сделать HTTP запросы.
// Эта функция позволяет прозрачно выдавать запросы.
const request = http.request(options, (response) => {
    let data = '';
    response.on('data', (chunk) => { data += chunk.toString(); });
    response.on('end', () => { console.log(data)} );
});

request.on('error', (err) => {console.error(err)});
//С http.request() всегда необходимо вызвать req.end(),
// чтобы показать, что вы закончили с запросом - даже если нет никаких данных,
// записанных в тело запроса.
request.end();
