var express = require("express");
var stylus = require("stylus")
var nib = require("nib")
var routes = require("./routes")
var http = require("http")
var path = require("path")
var mongo = require("mongodb")
var monk = require("monk")
var db = monk('localhost:27017/nodeapp')

var portnumber = 3000;

//init express
var app = express();
console.log("Express Initialized");

app.set('views', __dirname + "/views");

//init jade
app.set("view engine", "jade");
console.log("Jade initialized");

//Stylus Middleware
app.use(express.logger('dev'))

app.use(express.json())
app.use(express.urlencoded())
app.use(express.methodOverride())
app.use(express.cookieParser("pwd"))
app.use(express.session())
app.use(app.router);
app.use(stylus.middleware({
	src : __dirname + '/public'//,
	//compile : compile
}));

//static folder
app.use(express.static(__dirname+ "/public"));

//Render index page
app.get('/', routes.index);
app.get('/userlist', routes.userlist(db))
app.post('/adduser', routes.adduser(db))

app.listen(portnumber);
console.log("Connected to port " + portnumber);