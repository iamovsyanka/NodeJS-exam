const mssql = require('mssql/msnodesqlv8');
const config = require('./DBConfig');

function DB (cb) {
    this.insertFaculty = (args, context) => {
        return (new mssql.Request())
            .input('faculty', mssql.NVarChar, args.faculty)
            .input('faculty_name', mssql.NVarChar, args.faculty_name)
            .query('insert faculty(faculty, faculty_name) values (@faculty, @faculty_name)')
            .then((r) => { return args });
    };

    this.updateFaculty = (args, context) => {
        return (new mssql.Request())
            .input('a', mssql.NVarChar, args.faculty)
            .input('b', mssql.NVarChar, args.faculty_name)
            .query('update faculty set faculty = @a, faculty_name = @b where faculty = @a')
            .then((r) => {
                return (r.rowsAffected[0] === 0) ? null : args;
            });
    };

    this.connect = mssql.connect(config, err => {
        err ? cb(err, null) : cb(null, this.connect);
    });
}

exports.DB = (cb) => { return new DB(cb); };
