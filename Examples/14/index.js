const http = require('http');

let getMethod = (request, response) => {
    console.log(request.method);
    response.writeHead(200, {'Content-Type':'text/plain; charset=utf-8'});
    response.end(`Hello, i\'m ${request.method} method!`);
};

let error405 = (request, response) => {
    console.log(request.method);
    response.writeHead(405, {'Content-Type':'text/plain; charset=utf-8'});
    response.end(`Hey, i\'m ${request.method} method! But i\'m 405 error(((`);
};

let getHandler = (request, response) => { getMethod(request, response) };
let postHandler = (request, response) => { getMethod(request, response) };
let putHandler = (request, response) => { getMethod(request, response) };
let deleteHandler = (request, response) => { getMethod(request, response) };
let errorHandler = (request, response) => { error405(request, response) };

let httpHandler = (request, response) => {
    switch (request.method) {
        case 'GET': getHandler(request, response); break;
        case 'POST': postHandler(request, response); break;
        case 'PUT': putHandler(request, response); break;
        case 'DELETE': deleteHandler(request, response); break;
        default: errorHandler(request, response); break;
    }
};

let server = http.createServer();
server.listen(4000, (v) => { console.log('server.listen(4000)') })
    .on('request', httpHandler)
    .on('error', (e) => { console.error('server.listen(4000) error: ', e.code)});
