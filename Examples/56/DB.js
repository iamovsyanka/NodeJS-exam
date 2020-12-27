const sql = require('mssql');
const config = require('./dbConfiguration');

class DataBase {
    constructor() {
        //Создайте новый пул соединений
        this.connectionPool = new sql.ConnectionPool(config).connect().then(pool => {
            console.log('Connected to MSSQL');
            return pool
        }).catch(err => console.log('Connection Failed: ', err));
    }
/*Внутренне каждый ConnectionPool экземпляр представляет собой отдельный пул соединений TDS.
Как только вы создадите новый Request/Transaction/Prepared Statement,
новое соединение TDS будет получено из пула и зарезервировано для желаемого действия.
Как только действие завершено, соединение освобождается обратно в пул.
Проверка работоспособности соединения встроена, поэтому, как только мертвое соединение обнаружено,
оно немедленно заменяется новым.*/
    putFaculties(faculty, faculty_name) {
        return this.connectionPool.then(pool => {
            return pool.request()
                .input('faculty', sql.NVarChar, faculty)
                .input('faculty_name', sql.NVarChar, faculty_name)
                .query('update faculty set faculty_name = @faculty_name where faculty = @faculty');
        });
    }
}
module.exports = DataBase;
