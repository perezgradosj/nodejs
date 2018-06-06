var express = require("express");

var app = express();

app.set("view engine","jade");

app.get("/", function(req,res){

	res.render("index",{"variable":"Jonatha Perez"});
});

app.listen(8888);