const rpcWSC = WebSocket =  require('rpc-websockets').Client;
let ws = new rpcWSC('ws://localhost:4000');

ws.on('open', () => {
    ws.call('kek').then((r) => { console.log('message = ', r); });
    ws.call('sum', [2, 4, 6, 8, 10]).then((r) => { console.log('sum = ', r); });
    ws.call('secret').catch((err) => { console.error(err) }).then((r) => { console.log('date = ', r); })
    ws.login({login: 'admin', password: 'admin'})
        .then((login) => {
            ws.call('secret').then((r) => { console.log('date = ', r); })
       }
    )
});
