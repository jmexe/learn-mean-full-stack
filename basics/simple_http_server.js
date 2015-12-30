var http = require("http")
var fs = require("fs")

http.createServer(function(req, res) {
	fs.readFile('index.html', function(err, data) {
		if (err) {
			console.log("File Not Found!")
		}

		res.writeHead(200, {'Content-type' : 'html'});
		res.end(data);
	})
}).listen(8000, '127.0.0.1');

console.log('Webserver has started!');


