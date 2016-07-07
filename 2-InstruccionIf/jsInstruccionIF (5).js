function Mostrar()
{
//tomo la edad  
	var edad;

	edad = document.getElementById('edad').value;

	if (edad<13 || edad >17){

		alert("La persona No es adolescente");
	}

	/* otra opcion.

	if(edad >= 13 && edad <= 17){

		alert("La persona es adolescente");
	
	}else{
	
		alert("La persona no es adolescente");
	} */



}//FIN DE LA FUNCIÓN