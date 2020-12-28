const rpcWSS = require('rpc-websockets').Server;
let server = new rpcWSS({port: 4000, host:'localhost'});

server.setAuth(credentials => credentials.login === 'admin' && credentials.password === 'admin');

server.register('kek', () => 'Kek').public();

server.register('sum', (params) => {
    let sum = 0;
    params.forEach(function (item, i, params){
        if(Number.isInteger(item)) sum += item;
    });

    return sum;
}).public();

server.register('secret', () => new Date().toISOString()).protected();
