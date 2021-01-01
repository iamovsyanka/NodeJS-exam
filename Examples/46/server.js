const http = require('http');
const fs = require('fs');

let handler = (req, res) => {
	const ws = fs.createWriteStream('./MyText2.dat');

	req.pipe(ws);
	ws.on('finish', function () {
		res.end();
	});
};

http.createServer().listen(3000).on('request', handler);
