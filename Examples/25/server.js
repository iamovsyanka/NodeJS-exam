let http = require('http');
let qs = require('querystring');

let handler = (request, response) => {
	if (request.method === 'POST') {
		let result = '';
		request.on('data', (data) => { result += data; });
		request.on('end', () => {
			result += '\n';
			let o = qs.parse(result);
			for (let key in o) {
				result += `${key} = ${o[key]}\n`
			}
			response.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
			response.end(result);
		});
	}
};

http.createServer().listen(5000, () => { console.log('http://localhost:5000')})
	.on('error', (e) => { console.log('error: ', e.code) })
	.on('request', handler);
