const greeting = require("./global");

//Здесь устанавливаем глобальную переменную name, которую мы получаем в модуле app.js.
global.name = "Anna";

//Причем все глобальные функции и объекты, например, console,
// также доступны внутри global, поэтому мы можем написать и global.console.log(), и просто console.log().
global.console.log(date);
console.log(greeting.getMessage());
