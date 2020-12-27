//Axios - популярный HTTP-клиент на основе promise для выполнения асинхронных HTTP-запросов в JavaScript.
// Он работает как в браузере, так и в Node.js приложения.
const axios = require('axios');
const query = require('querystring');

let parms = query.stringify({x: 1, y: 5});
let url = `http://localhost:5000/parameter?${parms}`;

//метод для выполнения запросов GET
//Запрос GET может содержать параметры запроса в URL-адресе
axios.get(url)
    .then(response => {
        console.log(response.data);
    })
    //метод обещания для перехвата любой ошибки, которая выбрасывается во время выполнения запроса
    .catch(error => {
        console.error(error)
    });
