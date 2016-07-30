function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var numero;

	while(respuesta=='si'){

		contador++;

		numero=prompt("Ingrese un número: "+contador);
		// valida que el numero sea correcto.
		while(isNaN(numero)){

			numero=prompt("Ingreso inválido. Ingrese un número: "+contador);
		}
		
		numero=parseInt(numero);
		acumulador=acumulador+numero;

		respuesta=prompt("¿Desea continuar? Escriba si o no: ");
		// valida que el ingreso sea correcto.
		while(respuesta != "si" && respuesta !="no"){
			respuesta=prompt("Ingreso inválido. ¿Desea continuar? Escriba si o no: ");
		}

	}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN