var http = require("http");
var url = require("url");

function iniciar(route, handle){

	function onRequest(req,res){
		var pathname = url.parse(req.url).pathname;
		console.log("Peticion para " + pathname + " recibida.");

		res.writeHead(200, {"Content-Type":"text/html"});
		var content = route(handle,pathname);
		res.write(content);
		res.end();
	}

	http.createServer(onRequest).listen(8888);
	console.log("Servidor iniciado");
}

exports.iniciar = iniciar;