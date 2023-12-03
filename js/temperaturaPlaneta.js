// JavaScript Document
$(document).ready(function(){
	$('#solTemperatura').bind('click touchstart', function(e) {		
		calculaTemperaturaPlaneta();		
	});
});

function calculaTemperaturaPlaneta() {
    var f = new Array(5);
	var i4, sol4;	    
		
		for (i4=1;i4<5; i4++)
        { 	
			f[i4]=$("#f"+i4).val();		

        } 	
	
   //var aux1= Math.pow((f[1] * (1 - f[2])), 1/4);
	var aux1= f[1] * Math.pow((1 - f[2]), 1/4);
    var aux2= Math.pow(f[3]/(2 * f[4]), 1/2);
	
	sol2 = aux1*aux2;
	
	var conDecimal = sol2.toFixed(0);	
	//var conDecimal = expo2(sol2, 3);	
	
    var txt2="La temperatura del planeta es: "+conDecimal+" Kelvin</br>";
    $("#resultatTemperatura").html(txt2);
	var pregunta ="¿Puede existir agua líquida con esta temperatura? ¿Es suficiente conocer la temperatura de equilibrio para saber si hay agua en el planeta?";
	$("#preguntaTemperatura").html(pregunta);
 
}	  

function expo2(x, f) {
  return Number.parseFloat(x).toExponential(f);
}
