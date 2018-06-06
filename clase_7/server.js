var http = require("http");
var url = require("url");

function iniciar(router,handler){

	function onRequest(req,res){
		var pathname = url.parse(req.url).pathname;
		console.log("Peticion recibida: " + pathname);

		res.writeHead(200,{"Content-Type":"text/html"});
		var content = router(pathname,handler);
		res.write(content);
		res.end();
	}

	http.createServer(onRequest).listen(8888);
	console.log("Servidor iniciado.");
}

exports.iniciar = iniciar;