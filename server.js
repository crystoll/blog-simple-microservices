var express = require("express");
var app = express();
  
app.get("/", function(req, res) {
    res.send(new Date());
});
 
var server = app.listen(3000, function () {
    console.log("Listening on port %s...", server.address().port);
});