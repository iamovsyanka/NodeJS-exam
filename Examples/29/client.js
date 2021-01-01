const http = require('http');
const fs = require('fs');
let bound = 'smw60-smw60-smw60';
let body = `--${bound}\n`;
body += 'Content-Disposition: form-data; name="file"; filename="file.txt" \n';
body += 'Content-Type: text/plain\n\n';
body += fs.readFileSync('./from/file.txt');
body += `\n--${bound}--\n`;

let options = {
	host: 'localhost',
	path: '/mypath',
	port: 3000,
	method: 'POST',
	headers: {
		'content-type': 'multipart/form-data; boundary=' + bound
	}
};

const request = http.request(options, (response) => {
	let data = '';
	response.on('data', (chunk) => {
		console.log('http.request: data: body = ', data += chunk.toString('utf8'));
	});
	response.on('end', () => {
		console.log('http.request: end: body=', data)
	});
});

request.on('error', (e) => {
	console.log('http.request: error:', e.message)
});
request.end(body);
