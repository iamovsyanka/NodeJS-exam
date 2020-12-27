const udp = require('dgram');
const PORT = 4000;

let client = udp.createSocket('udp4');

client.on('message', (msg, info) => {
    console.log(`Server ${info.address}:${info.port} = ${msg}`);
}).on('error', (err) => {
    console.log('Error: ' + err);
    client.close();
});

//Передает дейтаграмму на сокет
client.send('Hi', PORT, 'localhost', (err) => {
    if (err) {
        client.close();
    }
    else {
        console.log('Sended');
    }
});
