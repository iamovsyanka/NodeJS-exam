const net = require('net');

let HOST = '127.0.0.1';
let PORT = 4000;

let ws = require('fs').createReadStream('./old/old.txt');

let client = new net.Socket();
client.connect(PORT, HOST, () => {
    console.log(`Client connected: ${client.remoteAddress}:${client.remotePort}`);
    ws.pipe(client);
});

client.on('close', () => {
    console.log('Client closed');
});

client.on('error', (e) => {
    console.log('Client error: ', e);
});
