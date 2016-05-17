var express = require("express");
var bodyParser = require("body-parser");
var app = express();
 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
 
app.get("/", function(req, res) {
    res.send(new Date());
});
 
var server = app.listen(3000, function () {
    console.log("Listening on port %s...", server.address().port);
});