const WebSocket = require('ws');
const fs = require('fs');
const ws = new WebSocket('ws://localhost:5000/server');

let k = 0;

ws.on('open', () => {
	const duplex = WebSocket.createWebSocketStream(ws, { encoding: 'utf8' });
	let wfile = fs.createWriteStream(`./file${++k}.txt`);
	duplex.pipe(wfile)
});
