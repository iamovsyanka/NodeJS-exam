const fs = require('fs');

//Асинхронно удаляет файл или символическую ссылку.
fs.unlink('new.txt', (e) => {
    if(e) console.log('Ошибка: ', e);
    else  console.log('Файл удалён')
});

fs.open('new.txt', 'w', (e, file) => {
    if(e) throw e;
    console.log('файл создан');
});

fs.writeFile('new.txt', 'qqq', (e) => {
    if(e) throw e;
    console.log('запись успешна');
});

fs.appendFile('new.txt', 'www', (e) => {
    if(e) throw e;
    console.log('добавление успешно');
});

fs.readFile('new.txt', (e,data) => {
    if(e) console.log('Ошибка ', e);
    else console.log('data: ', data.toString('utf8'))
});

fs.rename('new.txt', 'newReName.txt',(e) => {
    if(e) throw e;
    console.log('переименование успешно');
});
