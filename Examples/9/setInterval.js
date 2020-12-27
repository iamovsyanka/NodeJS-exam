let interval = setInterval(() => {
    console.log('I am executed after a certain time');
}, 1000);

setTimeout(() => {
    clearInterval(interval);
}, 5000);
