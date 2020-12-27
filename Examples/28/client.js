const http = require('http');
const parseString = require('xml2js').parseString;
const xmlbuilder = require('xmlbuilder');

let xmldoc = xmlbuilder.create('exams').att('id', '2');
xmldoc.ele('exam').att('name', 'Node').up()
		.ele('exam').att('name', 'BD');

const options = {
	host: 'localhost',
	path: '/',
	port: 5003,
	method: 'POST',
	headers: {
		"Content-Type": "text/xml",
		"Accept": "text/xml"
	}
};

const request = http.request(options, (response) => {
	let data = '';
	response.on('data', (chunk) => {
		data += chunk;
	});
	response.on('end', () => {
		console.log(data);
		parseString(data, (err, str) => {
			err ? console.log('error') : console.log('str: ', str);
		})
	})
});

request.write(xmldoc.toString({ pretty: true }));
request.end();
