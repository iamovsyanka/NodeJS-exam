const net = require('net');

let HOST = '0.0.0.0';
let PORT = 4000;

let Server = net.createServer();
Server.on('connection', (sock) => {
    console.log(`Server connected: ${sock.remoteAddress}:${sock.remotePort}`);

    sock.on('data', (data) => {
        let array = [];
        for (data of data.values())
            array.push(data);
        console.log(array);
    });


    sock.on('close', data => {
        console.log("Server closed");
    });

    sock.on('error', (e) => {
        console.log(`Server error: ${e}`);
    });
});

Server.on('listening', () => {
    console.log(`Server connected: ${HOST}:${PORT}`);
});
Server.on('error', (e) => {
    console.log(`TCP-Server error: ${e}`);
});

Server.listen(PORT, HOST);
