const EventEmitter = require('events').EventEmitter;
const server = new EventEmitter;

server.on('error', function () {
    console.log('I\'m not error');
});

//В ЕЕ специальным образом обрабатывается событие error
//Если нет обработчика на это событие, то ЕЕ генерирует исключение
server.emit('error');


