// JavaScript Document
$(document).ready(function(){
	$('#solKepler').bind('click touchstart', function(e) {	
		calculaEcuacionKepler();
	});
});

function calculaEcuacionKepler() {
    var d = new Array(3);
	var i2, sol2;
	    
		for (i2=1;i2<3; i2++)
        { 	
         d[i2]=$("#d"+i2).val();		 
        } 	
		
    aux2= (Math.pow(d[1], 2) * d[2]); 

	sol2 = Math.pow(aux2, 1/3);
	
	var conDecimal = sol2.toFixed(3);	
    var txt2="El semieje mayor de la órbita del planeta es: "+conDecimal+" Unidades Astronómicas</br>";
    $("#resultatOrbita").html(txt2);
 
}	  