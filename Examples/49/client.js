const net = require('net');

let HOST = '127.0.0.1';
let PORT = 4000;
let client = new net.Socket();
let buf =  Buffer.from([1,2,3]);

client.connect(PORT, HOST, () => {
    console.log(`Client connected: ${client.remoteAddress}:${client.remotePort}`);
    client.write((buf));
});

client.on('close', () => {
    console.log('Client closed');
});

client.on('error', (e) => {
    console.log('Client error: ', e);
});
