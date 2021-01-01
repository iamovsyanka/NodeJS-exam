const http = require('http');
const fs = require('fs');
let bound = 'smw60-smw60-smw60';
let body = `--${bound}\n`;
body += 'Content-Disposition: form-data; name="file"; filename="file.bmp" \n';
body += 'Content-Type: application/octet-stream\n\n';

let options = {
	host: 'localhost',
	path: '/mypath',
	port: 3000,
	method: 'POST',
	headers: {
		'content-type': 'multipart/form-data; boundary=' + bound
	}
};

const req = http.request(options, (res) => {
	let data = '';
	res.on('data', (chunk) => {
		data += chunk;
	});
	res.on('end', () => {
		console.log('http.request: end: lentgth body=', Buffer.byteLength(data))
	})
});

req.on('error', (e) => {
	console.log('http.request: error:', e.message)
});

req.write(body);

let stream = new fs.ReadStream('./from/pic.bmp')

stream.on('data', (chunk) => {
	req.write(chunk);
	console.log(Buffer.byteLength(chunk));
});

stream.on('end', () => {
	req.end(`\n--${bound}--`)
});

