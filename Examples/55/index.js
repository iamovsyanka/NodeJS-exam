const DB = require('./DB');
const http = require('http');
const url = require('url');
const Db = new DB();

let http_handler = (request, response) => {
    if (request.method === 'POST' && url.parse(request.url).pathname === '/faculties') {
        let data = '';
        request.on('data', chunk => {
            data += chunk;
        });
        request.on('end', () => {
            data = JSON.parse(data);
            response.writeHead(200, {'Content-Type': 'application/json'});
            Db.postFaculties(data.faculty, data.faculty_name).then(records => {
                response.end(JSON.stringify(data))
            }).catch(error => { console.error(error) });
        });
    }
};

let server = http.createServer();
server.listen(3002, () => {
    console.log('server.listen(3002)')
}).on('request', http_handler);
