const fs = require('fs')

let k = 5; //количество чисел
let sizeInt32LE = 4; // размер Int32
let wbuf = Buffer.allocUnsafe(sizeInt32LE * k); //выделяем 20 байт

fs.open('new.dat', 'w', (e, file) => {
	for (let i = 0; i < k; i++)
		wbuf.writeInt32LE(i, i * sizeInt32LE);
	fs.appendFile(file, wbuf, (e) => {
		if (e) throw e;
		console.log("записано")
	})
});

fs.open('new.dat', 'r', (e, file) => {
	for (let i = 0; i < k; i++)
		wbuf.writeInt32LE(i, i * sizeInt32LE);
	fs.readFile(file, (e, buf) => {
		if (e) throw e;
		else {
			let k = buf.length / sizeInt32LE; // количество чисел
			let m = [];
			for (let i = 0; i < k; i++) m.push(buf.readInt32LE(i * sizeInt32LE));
			console.log(m)
		}
	})
});
