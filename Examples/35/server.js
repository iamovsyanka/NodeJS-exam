const WebSocket = require('ws');
const ws = new WebSocket.Server({
    port: 5000,
    host: 'localhost'
});

ws.on('connection', (ws) => {
    let message = '';
    ws.on('message', (data) => {
        message = JSON.parse(data);
        console.log('on message: ', data);
    });

    ws.send(JSON.stringify({
        server: 'Hello',
        message: message.x,
        time: new Date().toISOString()
    }));
});

ws.on('error', (e) => { console.log('error: ', e) });
