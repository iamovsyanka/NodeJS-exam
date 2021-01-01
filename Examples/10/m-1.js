var x = 1;
global.y = 2;
process.z = 3;
console.log(x);
console.log(y);
//console.log(z) -error
console.log(global.x);
console.log(global.y);
console.log(global.z);
console.log(process.x);
console.log(process.y);
console.log(process.z);

function Calc(a, b) {
	this.a = a;
	this.b = b;
	this.add = () => this.a + this.b;
	this.sub = () => this.a - this.b;
}

let calcWithNumberOneAndTwo = new Calc(1, 2);

//пример передачи параметра
// module.exports = function (message) {
// 	console.log(message);
// }

exports.calcWithNumberOneAndTwo = calcWithNumberOneAndTwo;
exports.Calc = Calc;
exports.print = function print(message) {
	console.log(message);
};
