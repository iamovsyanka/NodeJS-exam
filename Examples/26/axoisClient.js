const axios = require('axios');

let url = 'http://localhost:5002';
let jsonMessage = JSON.stringify({
    comment: "axios",
    x: 1,
    y: 2,
    str: "Hello, i am JSON"
});

axios({
    method: 'post',
    url: url,
    data: jsonMessage,
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    }
}).then((response) => { console.log(response.data)} )
    .catch(error => { console.error(error) });
