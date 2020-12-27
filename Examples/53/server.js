const udp = require('dgram');
const PORT = 4000;

//Создает dgram.Socket объект указанного type типа
let server = udp.createSocket('udp4');

//Событие испускается, когда новая дейтаграмма доступна на сокете.
// Функция обработчика событий передает два аргумента: msg и info
server.on('message', (msg, info) => {
    console.log(`Message ${info.address}:${info.port} = ${msg}`);
    server.send(msg, info.port, info.address, (err) => {
        if (err) {
            server.close();
        }
        else {
            console.log('Sended');
        }
    });
})
    //обытие испускается после dgram.Socket того, как оно адресуемо и может принимать данные.
    // Это происходит либо явно, socket.bind() либо неявно при первой отправке данных
    // с использованием socket.send().
    .on('listening', () => {
        console.log(`Server PORT: ${server.address().port}`);
        console.log(`Server Address: ${server.address().address}`);
        console.log(`Server IPv: ${server.address().family}`);
    })
    //Событие после закрытия сокета close().
    // После срабатывания 'message'на этом сокете не будет выдаваться никаких новых событий.
    .on('close', () => console.log('Server CLOSED'))
    //Событие выдается всякий раз, когда возникает какая-либо ошибка.
    .on('error', (err) => {
        console.log('Error: ' + err);
        server.close();
    });

//Как только сокет будет создан, вызов socket.bind() даст сокету команду
// начать прослушивание сообщений дейтаграммы.
server.bind(PORT);
