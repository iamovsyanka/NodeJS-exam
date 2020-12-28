const mssql = require('mssql/msnodesqlv8');
const config = require('./DBConfig');

function DB (cb) {
    this.getFaculties = (args, context) => {
        return (new mssql.Request())
            .query('select * from faculty')
            .then((r) => { return r.recordset });
    };

    this.getFaculty = (args, context) => {
        return (new mssql.Request())
            .input('faculty', mssql.NVarChar, args.faculty)
            .query('select top(1) * from faculty where faculty = @faculty')
            .then((r) => { return r.recordset; });
    };

    this.connect = mssql.connect(config, err => {
        err ? cb(err, null) : cb(null, this.connect);
    });
}

exports.DB = (cb) => { return new DB(cb); };
