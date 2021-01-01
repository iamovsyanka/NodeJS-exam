const net = require('net');

const HOST = '127.0.0.1';
const PORT1 = 4000;
const PORT2 = 5000;

const handler = (n) => (sock) => {
	console.log('Server port: ' + n + ' Client port: ' + sock.remotePort);
	sock.on('data', (data) => {
		console.log(data.toString());
		sock.write(data);
	})
};

net.createServer(handler(PORT1)).listen(PORT1, HOST);
net.createServer(handler(PORT2)).listen(PORT2, HOST);
