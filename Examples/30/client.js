const http = require('http');
const fs = require('fs');

//Для создания потока для записи применяется метод fs.createWriteStream(),
// в который передается название файла. Если вдруг в папке нет такого файла, то он создается.
const file = fs.createWriteStream('./download/file.png');

let options = {
	host: 'localhost',
	path: '/from/pig.png',
	port: 3000,
	method: 'GET'
};

const request = http.request(options, (response) => {
	//Pipe - это канал, который связывает поток для чтения и поток для записи
	// и позволяет сразу считать из потока чтения в поток записи.
	//У потока чтения вызывается метод pipe(), в который передается поток для записи.
	response.pipe(file);
});

request.on('error', (e) => {
	console.log('http.request: error', e.message)
});

request.end();
