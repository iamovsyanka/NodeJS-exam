const http = require('http');

let jsonMessage = JSON.stringify({
    comment: "http",
    x: 1,
    y: 2,
    str: "Hello, i am JSON"
});
let path = `/`;
let options = {
    host: 'localhost',
    path: path,
    port: 5000,
    method: 'POST',
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    }
};

//Node.js поддерживает несколько подключений на сервер, чтобы сделать HTTP запросы.
// Эта функция позволяет прозрачно выдавать запросы.
const request = http.request(options, (response) => {
    let data = '';
    response.on('data', (chunk) => { data += chunk; });
    response.on('end', () => {
        console.log(data);
        const jsonResponse = JSON.parse(data);
        console.log(`comment = ${jsonResponse.comment}, str = ${jsonResponse.str}`);
    });
});

request.on('error', (err) => { console.error(err) });
//Посылает часть тела.
request.write(jsonMessage);
//С http.request() всегда необходимо вызвать req.end(),
// чтобы показать, что вы закончили с запросом - даже если нет никаких данных,
// записанных в тело запроса.
request.end();
