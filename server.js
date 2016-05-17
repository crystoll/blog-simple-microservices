var express = require("express");
var app = express();
var Client = require('node-rest-client').Client;
var client = new Client();

  
app.get("/", function(req, res) {
	client.get("http://localhost:4000", function (data, response) {
    	console.log(data.toString());
	});
    res.send(new Date());
});
 
var server = app.listen(3000, function () {
    console.log("Listening on port %s...", server.address().port);
});


