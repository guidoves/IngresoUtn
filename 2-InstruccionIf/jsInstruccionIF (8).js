function Mostrar()
{
//tomo la edad  

	var edad;
	var opcion;

	edad = document.getElementById('edad').value;
	opcion = document.getElementById('estadoCivil').value;

	if (opcion == "Soltero" && edad > 17){

		alert("Es soltero y no es menor.");


	}

	


}//FIN DE LA FUNCIÓN