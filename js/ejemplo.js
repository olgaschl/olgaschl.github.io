// JavaScript Document
function calculaEcuacion() { 
    var a = new Array(3) ;
	var i, v, solucion;
	
    for (i=1;i<4; i++)
        { v=eval('document.miFormulario.a'+i+'.value'); 
          a[i]=parseFloat(v);
        }
 
    solucion= (-a[2] + Math.sqrt(Math.pow(a[2],2)-(4*a[1]*a[3])))/(2*a[1]);
    document.miFormulario.x1.value=solucion;
    solucion= (-a[2] - Math.sqrt(Math.pow(a[2],2)-(4*a[1]*a[3])))/(2*a[1]);
    document.miFormulario.x2.value=solucion;
	  }
