const WebSocket = require('ws');
const fs = require('fs');
const wss = new WebSocket.Server({ port: 5000, host: 'localhost', path: '/server' });

wss.on('connection', (ws) => {
	const duplex = WebSocket.createWebSocketStream(ws, { encoding: 'utf8' });
	let rfile = fs.createReadStream(`./MyFile.txt`);
	rfile.pipe(duplex);
});
