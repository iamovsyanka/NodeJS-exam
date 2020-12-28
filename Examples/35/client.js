const WebSocket = require('ws');
const ws = new WebSocket('ws://localhost:5000');

let parm = process.argv[2];
let clientName = typeof parm == 'undefined' ? 'A' : parm;

ws.on('open', () => {
    ws.on('message', (data) => {
        data = JSON.parse(data);
        console.log('on message: ', data);
    });

    ws.send(JSON.stringify({
        name: clientName,
        time: new Date().toISOString()
    }));
});

ws.on('error', (e) => { console.log('error: ', e) });
