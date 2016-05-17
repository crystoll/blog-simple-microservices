var express = require("express");
var bodyParser = require("body-parser");
var app = express();
 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var counter = 0;
 
app.get("/", function(req, res) {
	counter++;
    res.send(""+counter);
});
 
var server = app.listen(4000, function () {
    console.log("Listening on port %s...", server.address().port);
});
