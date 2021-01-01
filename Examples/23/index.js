let http = require('http');
let fs = require('fs');

let handler = (request, response) => {
	if (request.url === '/' && request.method === 'GET') {
		response.writeHead(200, {
			'Content-Type': 'text/plain; charset=utf-8',
			'Content-Disposition': 'attachment; filename="file.txt"'
		});
		fs.createReadStream('./file.txt').pipe(response);
	}
	else {
		response.writeHead(200, {
			'Content-Type': 'text/plain; charset=utf-8',
			'Content-Disposition': 'attachment; filename="pic.png"'
		});
		fs.createReadStream('./pic.png').pipe(response);
	}
};

http.createServer().listen(3000)
	.on('error', (e) => { console.log('error: ', e.code) })
	.on('request', handler);
