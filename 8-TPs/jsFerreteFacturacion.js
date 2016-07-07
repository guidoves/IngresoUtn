/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var producto1;
	var producto2;
	var producto3;
	var suma;

	producto1 = document.getElementById('PrecioUno').value;
	producto2 = document.getElementById('PrecioDos').value;
	producto3 = document.getElementById('PrecioTres').value;

	producto1=parseInt(producto1);
	producto2=parseInt(producto2);
	producto3=parseInt(producto3);

	suma = producto1+producto2+producto3;
	
	

	alert("La suma de los importes es: "+suma); 
}
function Promedio () 
{
	var producto1;
	var producto2;
	var producto3;
	var promedio;

	producto1 = document.getElementById('PrecioUno').value;
	producto2 = document.getElementById('PrecioDos').value;
	producto3 = document.getElementById('PrecioTres').value;

	producto1 = parseInt(producto1);
	producto2 = parseInt(producto2);
	producto3 = parseInt(producto3);

	promedio = (producto1+producto2+producto3)/3;

	alert("El promedio de los importes es: "+promedio); 
}
function PrecioFinal () 
{
	var producto1;
	var producto2;
	var producto3;
	var precioFinal;

	producto1 = document.getElementById('PrecioUno').value;
	producto2 = document.getElementById('PrecioDos').value;
	producto3 = document.getElementById('PrecioTres').value;

	producto1 = parseInt(producto1);
	producto2 = parseInt(producto2);
	producto3 = parseInt(producto3);

	precioFinal = (producto1+producto2+producto3)*1.21;

	alert("El importe final es: "+precioFinal); 
}