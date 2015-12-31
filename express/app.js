var express = require("express")

var app = express();

app.get('/about', function(req, res) {
	res.send('<h1> About US </h1>');
});

app.get('/about/:title', function(req, res) {
	res.send('<h1>' + req.params.title + '</h1>')
});

app.get('/', function(req, res) {
	res.send('<h1> Welcome </h1>');
});

app.listen(3000);
