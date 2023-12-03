// JavaScript Document
$(document).ready(function(){
	$('#sol').bind('click touchstart', function(e) {	
		calculaEcuacion();
	});
});

function calculaEcuacion() {
    var a = new Array(4);
	var i, sol1;
	
    for (i=1;i<5; i++)
        { 
         a[i]=$("#a"+i).val();
        } 	
	if(a[4]	== 0) {
		sol1= (a[3] * Math.sqrt((a[1]-a[2])/a[1]));    		
	}
	else {		
		sol1= a[3] * Math.sqrt(a[4]);    
	}
		
	var conDecimal = sol1.toFixed(3);	
    var txt="El radio del planeta es: "+conDecimal+" Radios solares</br>";
    $("#resultat").html(txt);
}	  