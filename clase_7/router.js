
function route(pathname, handle){
	console.log("A punto de ruter una peticion para: " + pathname);

	if(typeof handle[pathname] === 'function')
		return handle[pathname]();

	else{
		console.log("No se ha encontrado manipulador para: " + pathname);
		return "404 No encontrado";
	}
}

exports.route = route;