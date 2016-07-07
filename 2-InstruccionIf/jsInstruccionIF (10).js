function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 

	var numero;

	numero = Math.floor((Math.random() * 10) + 1);

	if (numero == 9 || numero == 10){

		alert("EXCELENTE.");

	}

	if (numero >= 4 && numero < 9){

		alert("APROBÓ.");
	}

	if (numero < 4){

		alert("VAMOS, LA PROXIMA SE PUEDE.");
	}
	

}//FIN DE LA FUNCIÓN