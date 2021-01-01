const fs = require('fs');
let data = '';

const writerStream = fs.createWriteStream('file.txt');
data = 'qqqqqqqqq';
writerStream.write(data,'UTF8');
writerStream.end();

const readerStream = fs.createReadStream('file.txt');
readerStream.setEncoding('UTF8');
readerStream.on('data', function(chunk) {
    data += chunk;
});
readerStream.on('end',function() {
    console.log(data);
});
