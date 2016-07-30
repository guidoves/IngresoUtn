function Mostrar()
{
	var contador1=0;
	var contador2=0;
	var contador3=0;
	var contador4=0;
	var contador5=0;
	var contador6=0;
	var contador7=0;
	var contador8=0;
	var contador9=0;
	var contador10=0;
	var limite=75000
		for(var contador=0;contador<limite;contador++){

			

			//console.log(contador);

			var numero=Math.floor((Math.random() * 10) + 1);
			while (numero == 5 && (contador5*100)/limite >  5){

				var numero=Math.floor((Math.random() * 10) + 1);

			}


			switch(numero){
			
			case 1:
				
				contador1=contador1+1;

				break;
			case 2:

				contador2=contador2+1;

				break;

			case 3:

				contador3++;

				break;
			case 4:

				contador4++;

				break;
			case 5:

				contador5++;

				break;
			case 6:

				contador6++;

				break;

			case 7:

				contador7++;

				break;

			case 8:

				contador8++;

				break;

			case 9:

				contador9++;

				break;

			case 10:

				contador10++;

				break;



			}

			//console.log("numero 1: "+contador1);

		}	

		console.log("numero 1: "+(contador1*100)/limite+"%");
		console.log("numero 2: "+(contador2*100)/limite+"%");
		console.log("numero 3: "+(contador3*100)/limite+"%");
		console.log("numero 4: "+(contador4*100)/limite+"%");
		console.log("numero 5: "+(contador5*100)/limite+"%");
		console.log("numero 6: "+(contador6*100)/limite+"%");
		console.log("numero 7: "+(contador7*100)/limite+"%");
		console.log("numero 8: "+(contador8*100)/limite+"%");
		console.log("numero 9: "+(contador9*100)/limite+"%");
		console.log("numero 10: "+(contador10*100)/limite+"%");
		console.log(contador5);

	
}			
		