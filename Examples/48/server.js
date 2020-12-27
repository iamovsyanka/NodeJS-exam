//специальный сетевой модуль, он используется для создания как серверов так и клиентов.
// Этот модуль предоставляет асинхронную сетевую оболочку.
const net = require('net');

let HOST = '0.0.0.0';
let PORT = 4000;

//Создает новый TCP-сервер. Аргумент connectionListener автоматически устанавливается
// как прослушиватель для события «connection».
let server = net.createServer((sock) => {
//Запускается при возникновении ошибки.
// Событие ‘close’ будет вызываться непосредственно после этого события.
    sock.on('error', (e) => {
        console.log(`Server error: ${e}`);
    });

    //Строковое представление удаленного IP-адреса
    //Числовое представление удаленного порта.
    console.log(`Server connected: ${sock.remoteAddress}:${sock.remotePort}`);
// Запускается при получении данных. Данные аргумента представляют собой буфер или строку.
// Кодировка данных устанавливается с помощью socket.setEncoding().
    sock.on('data', (data) => {
        console.log(`Client message: ${data.toString()}`);
        sock.write(`Echo=> ${data}`);
    });
//Запускается после полного закрытия сокета.
    sock.on('close', () => {
        console.log("Socket closed");
    });
    //Начинает принимать соединения на указанном порте и хосте
}).listen(PORT, HOST);
