const net = require('net');

let HOST = '127.0.0.1';
let PORT = 4000;

let message = 'Message for Server';
// Создает новый объект сокета
let client = new net.Socket();
//Открывает соединение для данного сокета.
client.connect(PORT, HOST, () => {
    console.log(`Client: ${client.remoteAddress}:${client.remotePort}`);
});
//Отправляет данные в сокет. Второй параметр указывает кодировку в случае,
// если это строчные данные — по умолчанию используется кодировка UTF8.
client.write(message);

client.on('data', data => {
    console.log(`Server message: ${data.toString()}`);
    //Обеспечивает, чтобы в этом сокете не содержалось операций ввода-вывода данных.
    client.destroy();
});

client.on('close', () => {
    console.log('Client closed');
});

client.on('error', (e) => {
    console.log('Client error: ', e);
});
