const DB = require('./DB');
const http = require('http');
const url = require('url');
const Db = new DB();

let http_handler = (request, response) => {
    if (request.method === 'GET' && url.parse(request.url).pathname === '/faculties') {
        let faculty = url.parse(request.url, true).query.faculty;
        Db.getFaculties(faculty).then(records => {
            response.statusCode = 200;
            response.setHeader('Content-Type', 'application/json');
            response.setHeader('Access-Control-Allow-Origin', '*');
            response.setHeader('Access-Control-Allow-Headers', '*');

            response.end(JSON.stringify(records.recordset))
        }).catch(error => {
            response.statusCode = 400;
            response.statusMessage = 'Invalid method';
            response.end(JSON.stringify({error: String(error)}));
        });
    }
};

let server = http.createServer();
server.listen(3002, () => {
    console.log('server.listen(3002)')
}).on('request', http_handler);
