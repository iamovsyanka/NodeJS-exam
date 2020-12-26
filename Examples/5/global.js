let currentDate = new Date();

//установка глобальной переменной
global.date = currentDate;

//в модуле получаем глобальную переменную name, которая будет установлена из вне.
// При этом обратиться к глобальной переменной name мы можем через объект global:
// global.name, либо просто через имя name, так как переменная глобальная.
module.exports.getMessage = function() {
    let hour = currentDate.getHours();
    if(hour > 22) {
        return "Good night, " + global.name;
    }
    else if(hour > 16) {
        return "Good evening, " + name;
    }
    else if(hour > 10) {
        return "Good afternoon, " + name;
    }
    else {
        return "Good morning, " + name;
    }
};
