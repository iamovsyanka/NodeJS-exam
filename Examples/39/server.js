const rpcServer = require('rpc-websockets').Server;
const eventSocket = new rpcServer({
    port: 4000,
    host: 'localhost',
    path: '/'
});

//Создает новое событие, которое может быть отправлено клиентам,
// и возвращает объект RPCMethod для управления разрешениями метода.
eventSocket.event('A');
eventSocket.event('B');

console.log('Choose A or B event');

let input = process.stdin;
input.setEncoding('utf-8');
process.stdout.write('-');

input.on('data', data => {
    //Отправляет созданное событие клиентам.
    eventSocket.emit(data.slice(0, -1));
    process.stdout.write('-');
});
