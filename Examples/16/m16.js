function Stat(sfn = './static') {
    this.STATIC_FOLDER = sfn;
    let pathStatic = (fn) => `${this.STATIC_FOLDER}${fn}`;

    this.writeHTTP404 = (response) => {
        response.statusCode = 404;
        response.statusMessage = 'Resource not found';
        response.end("HTTP ERROR 404: Resource not found");
    };

    let fs = require('fs');
    let pipeFile = (request, response, headers) => {
        response.writeHead(200, headers);
        fs.createReadStream(pathStatic(request.url)).pipe(response);
    };

    this.isStatic = (ext, fn) => {
        //Метод regexp.test(str) ищет совпадение и возвращает true/false, в зависимости от того, находит ли он его.
        let reg = new RegExp(`^\/.+\.${ext}$`);

        return reg.test(fn);
    };

    this.sendFile = (request, response, headers) => {
        fs.access(pathStatic(request.url), fs.constants.R_OK, err => {
            if(err) this.writeHTTP404(response);
            else pipeFile(request, response, headers);
        });
    }
}

module.exports = (param) => new Stat(param);
