const WebSocket = require('ws');
const ws = new WebSocket.Server({
    port: 5000,
    host: 'localhost'
});

ws.on('connection', (ws) => {
//Сообщения Pong автоматически отправляются в ответ на сообщения ping,
// как того требует спецификация.
    ws.on('pong', (data) => {
        console.log('on pong: ', data.toString());
    });

    setInterval(() => {
        console.log('server: ping');
        ws.ping('server: ping')
    }, 1000);
});

ws.on('error', (e) => { console.log('error', e) });
