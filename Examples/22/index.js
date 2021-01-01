let http = require('http');
let fs = require('fs');
var multiparty = require('multiparty');

let handler = (request, response) => {
	if (request.method === 'GET') {
		response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
		response.end(fs.readFileSync('./index.html'));
	}
	else if (request.method === 'POST') {
		console.log('here');
		let result = '';
		let form = new multiparty.Form({ uploadDir: './upload' });
		form.on('field', (name, value) => {
			console.log('----field---');
			console.log(name, value);
			result += `<br>----${name} = ${value}`;
		});
		form.on('file', (name, file) => {
			console.log('----file---');
			console.log(name, file);
			result += `<br>----${name} = ${file.path}`;
		});
		form.on('close', () => {
			console.log('----close---');
			response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
			response.end(result);
		});
		form.parse(request);
	}
};

http.createServer().listen(3000)
	.on('error', (e) => { console.log('error: ', e.code) })
	.on('request', handler);
