/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	var edad= 0;
 	var sexo;
 	var estadoCivil=0;
 	var sueldoBruto=0;
 	var numeroLegajo=0;
 	var nacionalidad;
 	
 	
 	//validacion edad
 	while (edad < 18 || edad > 90){

 		edad=prompt("Ingrese edad: ");

 	}
 	document.getElementById('Edad').value=edad;


 	//validacion sexo
 	while (sexo != "M" && sexo !="F"){

 		sexo = prompt("Ingrese sexo:");
 	}


 	// muestra por id si es femenino o masculino.
 	if (sexo == "M"){

 		document.getElementById('Sexo').value="Masculino";
 	
 	}else{

 		document.getElementById('Sexo').value="Femenino";
 	}


 	//validacion estado civil
 	while (estadoCivil < 1 || estadoCivil > 4){

 		estadoCivil=prompt("Ingrese estado civil. 1(SOLTERO) 2(CASADO) 3(DIVIORCIADO) 4(VIUDO):");
 	}

 	// muestra por id si es soltero,casado,divorciado o viudo.
 	switch(estadoCivil){

 		case "1":

 		document.getElementById('EstadoCivil').value="Soltero";

 		break;

 		case "2":

 		document.getElementById('EstadoCivil').value="Casado";

 		break;

 		case "3":

 		document.getElementById('EstadoCivil').value="Divorciado";

 		break;

 		case "4":

 		document.getElementById('EstadoCivil').value="Viudo";

 		break;
 	}
 	//validar sueldobruto
 	while (sueldoBruto < 8000){

 		sueldoBruto=prompt("Ingrese sueldo bruto:");
 	}

 	document.getElementById('Sueldo').value=sueldoBruto;

 	//validar legajo
 	while(numeroLegajo < 1000 || numeroLegajo > 9999){

 		numeroLegajo=prompt("Ingrese numero de legajo");

 	}

 	document.getElementById('Legajo').value=numeroLegajo;

 	//validar nacionalidad
 	while (nacionalidad != "A" && nacionalidad != "E" && nacionalidad != "N"){

 		nacionalidad = prompt("Ingrese nacionalidad- A(ARGENTINO) E(EXTRANJERO) N(NATURALIZADO):");
 	}

 	// muestra por id si es argentino,extranjero o naturalizado.
 	switch(nacionalidad){

 		case "A":

 		document.getElementById('Nacionalidad').value="Argentino";

 		break;

 		case "E":

 		document.getElementById('Nacionalidad').value="Extranjero";

 		break;

 		case "N":

 		document.getElementById('Nacionalidad').value="Naturalizado";

 		break;
 	}
}
