const http = require('http');
const parseString = require('xml2js').parseString;
const xmlbuilder = require('xmlbuilder');

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type':'text/plain; charset=utf-8'});
    if (request.method === 'POST') {
        let body = '';
        request.on('data', (chunk) => { body += chunk; });
        request.on('end', () => {
            response.writeHead(200, {'Content-type': 'application/xml'});
            /* В метод parseString объекта xml2js передали ему нашу xml-строку
            в качестве первого аргумента и функцию обратного вызова
            в качестве второго аргумента. Эта функция обратного вызова будет вызвана,
            если наш xml успешно преобразован в объект JavaScript
            или если есть какая-то ошибка. В случае успеха данные будут переданы в переменную result.
            В случае, если что-то пошло не так, он передаст ошибку в переменную err.*/
            try {
                parseString(body, function (err, result) {
                    let id = result.request.$.id;
                    let xSum = 0;
                    let mSum = '';
                    result.request.x.forEach((p) => {
                        xSum += parseInt(p.$.value);
                    });
                    result.request.m.forEach((p) => {
                        mSum += p.$.value;
                    });
                    //Функция create вернет новый корневой узел.
                    let xmlDoc = xmlbuilder.create('response').att('id', id);
                    //Дочерние узлы создаются с element помощью функции (также может быть сокращено до ele or e).
                    xmlDoc
                        .ele('sum')
                            .att('element', 'x')
                        //Функция up() предоставляет средство для возврата обратно к родительскому узлу
                        // после создания дочернего узла (также может быть сокращена до u).
                            .att('result', xSum).up()
                        .ele('concat')
                            .att('element', 'm')
                            .att('result', mSum);

                    response.end(xmlDoc.toString());
                });
            }
            catch (e) {
                console.error(e);
                response.end('I can see that it\'s not XML')
            }
        });
    }
}).listen(5003);

console.log('Server running at http://localhost:5003/');
