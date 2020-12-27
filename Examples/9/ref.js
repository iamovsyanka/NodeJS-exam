const http = require('http');

const server = http.createServer(((req, res) => {})).listen(4100);

let interval = setInterval(() => {
    console.log('I am executed after a certain time');
}, 1000);

setTimeout(() => {
    server.close();
}, 5000);

//метод unref() указывает LibUV, что этот timer является второстепенным,
// то есть его не следует учитывать при проверки внутренних watcher на завершение процесса
interval.unref();
//Есть еще метод ref(), он является противоположенным unref(),
// то есть если я сделал timer.unref(), потом передумал и вызвал timer.ref()
// то выполнение не прервется, как будто unref() не было.
interval.ref();
