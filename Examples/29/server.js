let http = require('http');

let handler = (req, res) => {
	let data = '';
	req.on('data', (chunk) => { data += chunk; });
	req.on('end', () => { res.end(data); });
};

http.createServer().listen(3000).on('request', handler);
