const fs = require('fs');

let wbuf = Buffer.from([1, 2, 4, 8, 254]);
fs.writeFile('new.txt', wbuf, (e) => {
	if (e) throw e;
	console.log('запись успешна')
});

fs.readFile('new.txt', (e, data) => {
	if (e) { console.log('Ошибка ', e) }
	else {
		let array = [];
		for (data of data.values())	array.push(data);
		console.log(array);
	}
});
