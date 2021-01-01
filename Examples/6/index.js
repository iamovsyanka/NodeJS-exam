//асинхронность + callback
function a(callback) {
	setTimeout(() => {
		console.log('result of a');
		callback();
	}, 1000)
}
function b(callback) {
	setTimeout(() => {
		console.log('result of b');
		callback();
	}, 1000)
}

a(() => console.log('a() is done'));
console.log('end a')
b(() => console.log('b() is done'));
console.log('end b');

//callback hell
(
	() => {
		let arrOfarr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
		arrOfarr.forEach((arr) => {
			arr.forEach((number) => {
				//next callback operation
				console.log(number);
			})
		})
	}
)();

//разбитие на функции
function printNumber(number) {
	console.log(number);
}

function pringNumberFromArray(arr) {
	arr.forEach((number) => {
		printNumber(number);
	})
}

function printArrayOfArray(arrOfarr) {
	arrOfarr.forEach((arr) => {
		pringNumberFromArray(arr);
	})
}

let arrOfarr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
printArrayOfArray(arrOfarr);

//либо вынести это все в отдельный модуль и сделать
module.export = printArrayOfArray;
