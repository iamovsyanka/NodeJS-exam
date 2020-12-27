let http = require('http');
let qs = require('querystring');
let fs = require('fs');

let handler = (request, response) => {
	if (request.method === 'GET') {
		response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
		response.end(fs.readFileSync('./index.html'));
	}
	else if (request.method === 'POST') {
		let result = '';
		request.on('data', (data) => { result += data; });
		request.on('end', () => {
			result += ' <br/>';
			let o = qs.parse(result);
			for (let key in o) {
				result += `${key} = ${o[key]}<br/>`
			}
			response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
			response.end(result);
		});
	}
};

http.createServer().listen(5000, () => { console.log('http://localhost:5000')})
	.on('error', (e) => { console.log('error: ', e.code) })
	.on('request', handler);
