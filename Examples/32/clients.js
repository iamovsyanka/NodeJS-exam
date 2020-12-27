const WebSocket = require('ws');
const ws = new WebSocket('ws://localhost:5000/broadcast');

let parm = process.argv[2];
let clientName = typeof parm == 'undefined' ? 'B' : parm;

console.log('name = ', parm);

ws.on('open', () => {
    ws.send(`Hello from ${clientName} to server`);
    ws.on('message', message => { console.log(`Received message => ${message}`) });

    setTimeout(() => { ws.close() }, 25000)
});
