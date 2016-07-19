/*Debemos mostrar dos números Random  del 1 al 10 
y una de las cuatro operaciones básicas (suma, resta,
 división o multiplicación) para realizar entre estos
 dos números, estas operaciones también serán Random.
 En el cuadro de texto resultado el jugador debe ingresar
 el resultado de la operación y presionar el botón Aceptar.
se debe informar si el resultado es el correcto o no.
*/
var respuesta;
var resultado;
function comenzar()
{
//variables numeros y operadores
var numero1 = Math.floor((Math.random()*10)+1);
var numero2 = Math.floor((Math.random()*10)+1);
var operador = Math.floor((Math.random()*4)+1);

//muestra los numero
document.getElementById('PrimerNumero').value=numero1;
document.getElementById('SegundoNumero').value=numero2;


//elije operador

switch(operador){

	case 1:
	document.getElementById('Operador').value="+";
	resultado=numero1+numero2;

	break;

	case 2:
	document.getElementById('Operador').value="-";
	resultado=numero1-numero2;

	break;

	case 3:
	document.getElementById('Operador').value="x";
	resultado=numero1*numero2;

	break;

	case 4:
	document.getElementById('Operador').value="/";
	resultado=numero1/numero2;

	break;

	
}
 
	

}//FIN DE LA FUNCIÓN
function Responder()
{
	respuesta=document.getElementById('Respuesta').value;

	if (resultado==respuesta){

		alert("Muy bien!");
	
	}else{

		alert("Muy mal!");
	}

}//FIN DE LA FUNCIÓN
