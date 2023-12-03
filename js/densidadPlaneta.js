// JavaScript Document
$(document).ready(function(){
	$('#solDensidad').bind('click touchstart', function(e) {	
		calculaDensidadPlaneta();		
	});
});

function calculaDensidadPlaneta() {
    var e = new Array(3);
	var i2, sol2;
	    
		for (i2=1;i2<3; i2++)
        { 	
			e[i2]=$("#e"+i2).val();		 
        } 	
	
	//pasamos a gramos multiplicando por los g de la Tierra
   e[1] = e[1] * 5.972 * (Math.pow(10, 27));  
      
   //pasamos a cm 
   e[2] = e[2]  * 100000;  
   
   var aux1= 3 * e[1];
    var aux2= 4 * Math.PI * (Math.pow(e[2], 3)); 
		
	sol2 = aux1/aux2;
	
	var conDecimal = sol2.toFixed(3);	
	//var conDecimal = expo(sol2, 3);	
	
    var txt2="La densidad del planeta es: "+conDecimal+" gramos/cm<sup>3</sup></br>";
    $("#resultatDensitat").html(txt2);
	var pregunta ="¿Sabes cuál es la densidad del agua?";
	$("#preguntaDensidad").html(pregunta);
 
	marcaPlanetaGrafico(sol2);	
 
}	  

function expo(x, f) {
  return Number.parseFloat(x).toExponential(f);
}

function marcaPlanetaGrafico(sol2) {	
	
	if(sol2 < 1) {
		$('.planetaGaseoso2').effect("pulsate", { times:3 }, 2000);
	} else if(sol2 < 3) {
		$('.planetaHelado2').effect("pulsate", { times:3 }, 2000);
	} else {
		$('.planetaRocoso2').effect("pulsate", { times:3 }, 2000);
	}
}

