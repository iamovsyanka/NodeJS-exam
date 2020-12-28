const rpcWSC = WebSocket =  require('rpc-websockets').Client;
let ws = new rpcWSC('ws://localhost:4000');

ws.on('open', () => {
    //Вызывает зарегистрированный метод RPC на сервере. Решает, как только ответ готов.
    ws.call('kek').then((r) => { console.log('message = ', r); });
    ws.call('sum', [2, 4, 6, 8, 10]).then((r) => { console.log('sum = ', r); });
    ws.call('secret').catch((err) => { console.error(err) }).then((r) => { console.log('date = ', r); })
    //Логины с другой стороны соединения
    // Параметры используются для аутентификации с другой стороны соединения и определяются пользователем.
    // Бросает с подробным сообщением, если вход в систему не удается.
    ws.login({login: 'admin', password: 'admin'})
        .then((login) => {
            ws.call('secret').then((r) => { console.log('date = ', r); })
       }
    );
});
