'use strict';

var express = require("express");
var path    = require("path");
var app      = express();
var port     = process.env.PORT || 3000;
var routes   = require("./app/routes/index");

app.set('views',path.join(__dirname,'views'));
app.set('view engine','jade');

routes(app);

app.listen(port,function(){
	console.log("Server listening on port "+port);
});

