function Mostrar()
{
	var contador = 0;
	alert('iteración while en forma Ascendente'); 
	

	/* while (contador <= 10){

		alert(contador);

		contador = contador+1;

	} */
	/* while(true){

		alert(contador);

		

		if (contador == 10 ){

			break;
		}

		contador = contador + 1;


	} */

	while(1){

		contador = contador + 1;
		if(contador == 3){

			alert("while"+contador);

			
			continue;
		}

		if (contador == 6){

			break;
		}

		alert("Fin"+contador);

	}

 

}//FIN DE LA FUNCIÓN