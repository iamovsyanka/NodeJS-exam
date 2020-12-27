//Axios - популярный HTTP-клиент на основе promise для выполнения асинхронных HTTP-запросов в JavaScript.
// Он работает как в браузере, так и в Node.js приложения.
const axios = require('axios');
const query = require('querystring');

let parms = query.stringify({x: 1, y: 5});
let url = 'http://localhost:5000/parameter';

//метод для выполнения запроса HTTP post
axios({
    method: 'post',
    url: url,
    data: parms
}).then((response) => { console.log(response.data)} );
