//let m1 = require('./m-1')('hello');
let m1 = require('./m-1');

m1.print('hi');
console.log('y: ' + global.y);
console.log('z: ' + process.z);
console.log(m1.calcWithNumberOneAndTwo.add());
console.log(new m1.Calc(2, 2).sub());
console.log('CACHE1: ');
console.log(require.cache);
delete require.cache[require.resolve('./m-1.js')];
console.log('CACHE2: ');
console.log(require.cache);
