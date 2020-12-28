const http = require('http');
const fs = require('fs');

http.createServer(function (request, response) {
	fs.access(__dirname + request.url, fs.constants.R_OK, (err) => {
		if (err) {
			response.statusCode = 200;
			console.error(err);
			response.end('Error');
		}
		else {
			//Для создания потока для чтения используется метод fs.createReadStream(),
			// в который также передается название файла. В качестве опционального параметра
			// здесь передается кодировка, что позволит сразу при чтении кодировать
			// считанные данные в строку в указанной кодировке.

			//Это элегантное решение, которое позволяет собирать кусочки информации в буфер и,
			// когда он заполнен, сразу отправлять их в поток для чтения
			fs.createReadStream(__dirname + request.url).pipe(response);
		}
	})
}).listen(3000);

console.log('Server running at http://127.0.0.1:3000/');
