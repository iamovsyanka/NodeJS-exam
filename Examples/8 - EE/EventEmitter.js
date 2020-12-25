const util = require('util');
const EventEmitter = require('events');

let count = 0;

function ModifyCount() {
    this.plus = () => ++count;
    this.minus = () => --count;
    this.get = () => count;
}

//Производный  от EventEmitter объект может быть создан с помощью  функции inherits модуля utils.
//Объект приобретает функциональность, позволяющую генерировать и прослушивать события.
util.inherits(ModifyCount, EventEmitter.EventEmitter);

//Для наследования можно использовать ключевое слово extends (ES6).
// class ModifyCount extends EventEmitter {
//     plus = () => ++count;
//     minus = () => --count;
//     get = () => count;
// }

exports.ModifyCount = ModifyCount;
