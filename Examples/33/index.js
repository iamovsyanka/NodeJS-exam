const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 5000, host: 'localhost', path: '/server' });

wss.on('connection', (ws) => {
	const duplex = WebSocket.createWebSocketStream(ws, { encoding: 'utf8' });

	duplex.pipe(process.stdout); // от сервера

	process.stdin.pipe(duplex); // серверу
});
