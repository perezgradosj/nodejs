var http = require("http");

function iniciar(){
	function onRequest(req,res){
		console.log("Peticion recibida.");
		res.writeHead(200,{"Content-Type":"text/html"});
		res.write("Hola mundo");
		res.end();
	}
	http.createServer(onRequest).listen(8888);
	console.log("Servidor iniciado");
}

exports.iniciar = iniciar;