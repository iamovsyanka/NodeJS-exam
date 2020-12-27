const DB = require('./DB');
const http = require('http');
const url = require('url');
const Db = new DB();

let http_handler = (request, response) => {
    if (request.method === 'DELETE' && url.parse(request.url).pathname === '/faculties') {
        let faculty = url.parse(request.url, true).query.faculty;
        response.writeHead(200, {'Content-Type': 'application/json'});
        Db.getFaculty(faculty)
            .then((response) => { if(response.recordset.length === 0)
                    throw 'No such faculty'})
            .catch(error => {
                console.error(error);
                response.end(error)});
        Db.deleteFaculty(faculty).then(records => {
            response.end('Faculty deleted')
        })
    }
};

let server = http.createServer();
server.listen(3002, () => {
    console.log('server.listen(3002)')
}).on('request', http_handler);
