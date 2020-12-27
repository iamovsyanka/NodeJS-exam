const axios = require('axios');

let url = 'http://localhost:5000';
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
}).then((response) => {
    console.log(response.data);
    const jsonResponse = response.data;
    console.log(`comment = ${jsonResponse.comment}, str = ${jsonResponse.str}`);
}).catch(error => { console.error(error) });
