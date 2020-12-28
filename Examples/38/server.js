/*Библиотека rpc-websockets позволяет разработчикам легко реализовать свою бизнес-логику,
включающую обмен сообщениями между пользователями, машинами или любыми устройствами.
Он предоставляет возможность отправлять и получать данные JSON через коммуникационный
протокол WebSocket для поддержки двухстороннего уведомления push, запуска методов RPC
и запуска любых типов сигнализации событий. Только клиенты могут вызывать методы RPC,
а не наоборот в данный момент.*/
const rpcWSS = require('rpc-websockets').Server;
let server = new rpcWSS({port: 4000, host:'localhost'});

server.setAuth(credentials => credentials.login === 'admin' && credentials.password === 'admin');

//Регистрирует метод RPC и возвращает объект RPCMethod для управления разрешениями метода.
server.register('kek', () => 'Kek').public();

//Помечает метод RPC как общедоступный. Все клиенты, как аутентифицированные,
// так и анонимные, смогут использовать этот метод.
// Этот параметр установлен по умолчанию в файле .register.
server.register('sum', (params) => {
    let sum = 0;
    params.forEach(function (item, i, params){
        if(Number.isInteger(item)) sum += item;
    });

    return sum;
}).public();

//Помечает метод RPC как защищенный. Этот метод будет доступен только в том случае,
// если клиент успешно прошел аутентификацию с помощью файла .login.
server.register('secret', () => new Date().toISOString()).protected();
