var http= require("http"),
	fs=require("fs");

http.createServer(function(req,res){
	fs.readFile("./index.html",function(err,html){
		res.write(html);
		res.end();
	});
}).listen(8080);

/*
http.createServer(function(req,res){
	fs.readFile("./index.html",function(err,html){
		res.writeHead(200,{"Content-Type":"application/json"})
		res.write(JSON.stringify({nombre:"Jonathan",apellidos:"Perez Grados"}));
		res.end();
	});
}).listen(8080);
*/