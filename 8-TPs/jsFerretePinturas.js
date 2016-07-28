/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	
	//toma la temperatura
	var ingreso;
	ingreso = document.getElementById('Temperatura').value;
	// convierte 
	ingreso = (ingreso-32)*(5/9);
	// muestra resultado
	alert("Resultado: "+ingreso+" grados centígrados.");
}

function CentigradosFahrenheit () 
{
	//toma la temperatura
	var ingreso =document.getElementById('Temperatura').value;
	//convierte
	ingreso = (ingreso*(9/5))+32;
	// muestra resultado
	alert("Resultado: "+ingreso+" grados fahrenheit.");
}
