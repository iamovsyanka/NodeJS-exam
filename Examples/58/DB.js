const sql = require('mssql')
var config = {
    user: 'Vad',
    password: 'Vad',
    server: 'localhost',
    database: 'GVA',
    "options": {
        "encrypt": true,
        "enableArithAbort": true
    }
};

class DataBase {
    constructor() {
        this.connectionPool = new sql.ConnectionPool(config).connect().then(pool => {
            console.log('Connected to MSSQL');
            return pool;
        }).catch(err => console.log('Connection Failed: ', err));
    }

    insert_Faculty(faculty, faculty_name){
        return this.connectionPool.then(pool => {
            return pool.request()
                .input('FACULTY', sql.NVarChar(40), faculty)
                .input('FACULTY_NAME', sql.NVarChar(40), faculty_name)
                .execute('INSERT_FACULTY')
        });
    }
}
module.exports = DataBase;
