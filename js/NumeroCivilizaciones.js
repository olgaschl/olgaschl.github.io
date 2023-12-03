// JavaScript Document
$(document).ready(function(){  
	$('#sol2').bind('click tap touchstart', function(e) {
		calculaCivilizaciones();
	});  
	document.getElementById('c1').focus();
});

function calculaCivilizaciones() { 
    var c = new Array(7) ;	
	var i, sol2;
	
    for (i=1;i<9; i++)
        { 		
         c[i]=$("#c"+i).val();		 
        } 	
    sol2= (c[1] * c[2] * c[3] * c[4] * c[5] * c[6] * c[7] * c[8]); 	
	
    var txt="Civilizaciones avanzadas en la Vía Láctea: "+ sol2;
    $("#resultatCivilizaciones").html(txt);
  }	  