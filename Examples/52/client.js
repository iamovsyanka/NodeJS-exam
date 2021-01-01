const net = require('net');

const HOST = '127.0.0.1';
const PORT1 = 4000;
const PORT2 = 5000;

const client = new net.Socket();

const client1 = new net.Socket();

client.connect(PORT1, HOST, () => {
	console.log(`Client1 connected: ${client.remoteAddress}:${client.remotePort}`);
	client.on('data', (data) => {
		console.log(data.toString());
	});
	client.write('Hello from client:' + PORT1)
});

client.on('close', () => {
	console.log('Client closed');
});

client.on('error', (e) => {
	console.log('Client error: ', e);
});

client1.connect(PORT2, HOST, () => {
	console.log(`Client1 connected: ${client1.remoteAddress}:${client1.remotePort}`);
	client1.on('data', (data) => {
		console.log(data.toString());
	});
	client1.write('Hello from client:' + PORT2)
});

client1.on('close', () => {
	console.log('Client closed');
});

client1.on('error', (e) => {
	console.log('Client error: ', e);
});
