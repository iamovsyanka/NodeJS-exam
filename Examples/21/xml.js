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

                    let xmlDoc = xmlbuilder.create('response').att('id', id);
                    xmlDoc.ele('sum')
                        .att('element', 'x')
                        .att('result', xSum).up().ele('concat')
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
