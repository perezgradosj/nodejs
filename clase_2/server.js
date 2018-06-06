var http= require("http"),
	fs=require("fs");

http.createServer(function(req,res){
	fs.readFile("./index.html",function(err,html){

		var html_string=html.toString();

		//Expresion regular que busca en el HTML donde haya {x}
		var variables=html_string.match(/[^\{\}]+(?=\})/g);
		var nombre="Jonatha Perez Grados";

		//Variables {x}
		for (var i = variables.length - 1; i >= 0; i--) {
			//Lo ejecutamos como codigo de javascript
			//Para obtener el valor de dichas variables
			var value=eval(variables[i]);

			//Reemplazamos el contenido de {x} por su valor correspondiente
			html_string=html_string.replace("{"+variables[i]+"}",value);
		};

		//Mandamos el contenido 
		res.writeHead(200,{"Content-Type":"text/html"});
		res.write(html_string);
		res.end();
	});
}).listen(8080);
