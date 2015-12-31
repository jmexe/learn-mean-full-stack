var express = require("express");
var jade = require("jade");

var portnumber = 3000;

//init express
var app = express();
console.log("Express Initialized");

app.set('views', __dirname + "/views");

//init jade
app.set("view engine", "jade");
console.log("Jade initialized");

//static folder
app.use(express.static(__dirname+ "/public"));

//Render index page
app.get("/", function(req, res) {
	res.render('index', {title: "Hello, Jade!"});
});

app.listen(portnumber);
console.log("Connected to port " + portnumber);