//Для того, чтобы воспользоваться ЕЕ достаточно подключить встроенный
// модуль ‘events’ и взять у него свойство EventEmitter
const EventEmitter = require('events').EventEmitter;
//После чего создается объект, у которого есть необходимые методы
const server = new EventEmitter;

//Метод on - подписка.
//Указываем имя события, на которое подписываемся, и функцию обработчик
//Подписчики вызываются в том же порядке, в котором указываются
server.on('Hello', function(data) {
    console.log(data);
});

server.on('Hello', function(data) {
    console.log(data + 'x2');
});

server.on('Bye', function(data) {
    console.log(data);
});

//Метод emit - генерирует событие
//Указываем имя события и данные
server.emit('Hello', 'Hello world!');
server.emit('Bye', 'Bye-bye!');

console.log('\nCount of listeners: ' + server.listenerCount('Hello'));
