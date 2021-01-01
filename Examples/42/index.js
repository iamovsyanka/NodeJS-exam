const fs = require('fs');

fs.open('new.txt', 'w', (e, file) => {
    if(e) throw e;
    console.log('файл создан');
});

try {
    //Следите за изменениями на filename том, где filename находится либо файл, либо каталог.
    fs.watch('new.txt', (event, filename) => {
        if(filename) console.log(`folder: ${filename}, event: ${event}`)
    })
}
catch (e) {
    console.error('e = ', e);
}

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

console.log('file: ' + fs.readFileSync('new.txt', 'utf-8'));
