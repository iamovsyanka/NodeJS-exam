const rpc = require('rpc-websockets').Client;
const eventSocket = new rpc('ws://localhost:4000');

eventSocket.on('open', () => {
    //Подписывается на определенное событие.
    eventSocket.subscribe('A');
    eventSocket.on('A', () => console.log('It is A event!\n' + new Date().toString()));
});

setTimeout(() => {
    console.log('unsubscribe');
    //Отписывается от определенного события.
    eventSocket.unsubscribe('A');
}, 10000);
