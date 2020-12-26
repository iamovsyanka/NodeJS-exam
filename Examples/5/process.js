/*Любое приложение созданное на Node.js — это экземпляр объекта Process,
который наследует все свойства и методы этого объекта.
С помощью этих свойств и методов мы можем получить информацию о приложении и контексте его исполнения. */

//возвращает абсолютный путь к исполняемому файлу, который запустил процесс Node.js.
console.log(process.execPath);
//возвращает версию Node.js
console.log(process.version);
//возвращает строку, определяющую платформу операционной системы, на которой запущен процесс
console.log(process.platform);
//возвращает строку, определяющую архитектуру процессора, на котором на текущий момент запущен Node.js
console.log(process.arch);
//возвращает заголовок текущего процесса (например, возвращает текущее значение ps)
console.log(process.title);
//возвращает PID процесса
console.log(process.pid);

const greeting = require("./global");

//возвращает открытый для чтения стрим
process.stdin.setEncoding('utf8');

process.stdin.on('readable', () => {
    global.name = process.stdin.read();
    if (global.name !== null) {
        global.console.log(date);
        console.log(greeting.getMessage());
    }
});

//Завершает процесс с указанным кодом. Если опустить параметр, exit использует код «success» - 0.
process.on('exit', (code) => {
    console.log(`About to exit with code: ${code}`);
});
