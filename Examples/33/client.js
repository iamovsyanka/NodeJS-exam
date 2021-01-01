const WebSocket = require('ws');

const ws = new WebSocket('ws://localhost:5000/server');

const duplex = WebSocket.createWebSocketStream(ws, { encoding: 'utf8' });

duplex.pipe(process.stdout); // от сервера

process.stdin.pipe(duplex); // серверу
