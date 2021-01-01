const fs = require('fs');

//Асинхронный вариант
fs.open('new.txt', 'w', (e, file) => {
    if(e) throw e;
    console.log('файл создан');
});

fs.copyFile('new.txt', 'newCopy.txt', (e) => {
    if(e) console.log(e);
    console.log('копия создана');
});

fs.exists('new.txt', (exists) =>{
    if(exists) console.log('есть');
    else console.log('нет');
});

fs.writeFile('new.txt', 'qqq', (e)=>{
    if(e) throw e;
    console.log('запись успешна');
});

fs.appendFile('new.txt', 'www', (e)=>{
    if(e) throw e;
    console.log('добавление успешно');
});

fs.readFile('new.txt', (e,data)=>{
    if(e) console.log('Ошибка ', e);
    else console.log('data: ', data.toString('utf8'));
});
