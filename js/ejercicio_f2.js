// JavaScript Document
$(document).ready(function(){
  $("#sol").click(calculaEcuacion);

});

function calculaEcuacion() { 
    var a = new Array(3) ;
	var i, v, sol1, sol2;
	
    for (i=1;i<4; i++)
        { 
         a[i]=$("#a"+i).val();
        }
 
    sol1= (-a[2] + Math.sqrt(Math.pow(a[2],2)-(4*a[1]*a[3])))/(2*a[1]);
    sol2= (-a[2] - Math.sqrt(Math.pow(a[2],2)-(4*a[1]*a[3])))/(2*a[1]);
    var txt="la ecuacion "+a[1]+"x2+"+a[2]+"x+"+a[3]+"=0 </br> tiene las siguientes soluciones: </br>";
    txt+="s1="+sol1+"   s2="+sol2+ "</br>";
    $("#resultat").html(txt);
	$("#cab").hide();
	$("#sol").hide();
	  }
	  
