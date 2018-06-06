
function iniciar(){
	console.log("Manipulador de peticion 'iniciar' fue llamado");
	
	function sleep(milliSeconds){
		//Obtenemos la hora actual
		var horaActual = new Date().getTime();
		//Generamos un bucle entre la hora actual y la (hora actual + milliSeconds)
		while(new Date().getTime() < horaActual+milliSeconds);
	}
	
	sleep(10000);
	return "Hola iniciar";
}

function subir(){
	console.log("Manipulador de peticion 'iniciar' fue llamado");
	return "Hola subir";
}


exports.iniciar = iniciar;
exports.subir = subir;