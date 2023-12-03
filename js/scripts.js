var mobil = false;
/*$(document).ready(function(){
	if(isFlashEnabled()) {	 	
		$("#flashAltazimuth").show();			
	}
	else {
		$("#imgAltazimuth").show();			
	}
});*/

$(document).ready(function(){
	document.getElementById('opa').style.opacity = 0;
    document.getElementById('opa2').style.opacity = 1;  
	$("#menuRecomendaciones").on('click', function(){	
		inici_comptador();
	});
});

$(document).ready(function(){
	$('html').addClass('android-scroll-bar');
	$("#menuPorque").on('click', function(){	
		$("#Porque").show();	
		resVisible = "#Introduccio";
		$("#Habitabilidad").hide();
		$("#Drake").hide();
	});
});

$(document).ready(function(){		
	$("#menuHabitabilidad").on('click', function(){	 	
	$("#Porque").hide();
	$("#Drake").hide();    
	$("#Habitabilidad").show();	
	resVisible = "#Introduccio";
  });
});
$(document).ready(function(){
	$("#menuDrake").on('click', function(){	 
	$("#Porque").hide();
	$("#Habitabilidad").hide();	
	$("#Drake").show();	
	$("#Drake").css("overflow-x", "scroll");
	resVisible = "#Introduccio";
  });
}); 


$(document).ready(function(){
	$("#menuPorque").on('touchstart', function(){	 
		$("#Porque").show();	
		resVisible = "#Introduccio";
	$("#Habitabilidad").hide();
	$("#Drake").hide();
  });
});
$(document).ready(function(){
	$("#MenuHabitabilidad").on('touchstart', function(){	 
	$("#Porque").hide();
	$("#Drake").hide();
	$("#Habitabilidad").show();	
	resVisible = "#Introduccio";
  });
});

$(document).ready(function(){
	$("#menuDrake").on('touchstart tap', function(){	   
	$("#Porque").hide();
	$("#Habitabilidad").hide();		
	$("#Drake").show();		
	$("#Drake").css("Visibility", "visible");
	$("#Drake").css("overflow-x", "scroll");	
	resVisible = "#Introduccio";

  });
}); 


$(document).ready(function(){
	$("#menuPlanetasyLunas").on('click', function(){		
	  $("#Meteoritos").hide();
	  $("#Orbitas").hide();
	  $("#Estaciones").hide();
	  	$("#PlanetasyLunas").show();	
resVisible = "SistemaSolar";			  
		
  });
});
$(document).ready(function(){
	$("#menuMeteoritos").on('click', function(){	 
	$("#PlanetasyLunas").hide();
	$("#Orbitas").hide();
	$("#Estaciones").hide();
  	$("#Meteoritos").show();	
resVisible = "SistemaSolar";			  
	
  });
});
$(document).ready(function(){
	$("#menuOrbitas").on('click', function(){	 
	  $("#PlanetasyLunas").hide();
	  $("#Meteoritos").hide();
	  $("#Estaciones").hide();
      $("#Orbitas").show();	
resVisible = "SistemaSolar";			  
	  
  });
}); 
$(document).ready(function(){
	$("#menuEstaciones").on('click', function(){	 
	  $("#PlanetasyLunas").hide();
	  $("#Meteoritos").hide();
	  $("#Orbitas").hide();
      $("#Estaciones").show();	
resVisible = "SistemaSolar";			  
	  
  });
}); 


$(document).ready(function(){
	$("#menuplanetasyLunas").on('touchstart', function(){	 
	  $("#Meteoritos").hide();
	  $("#Orbitas").hide();
	  $("#Estaciones").hide();
	  	$("#PlanetasyLunas").show();	
	resVisible = "SistemaSolar";		
		
  });
});
$(document).ready(function(){
		$("#menuMeteoritos").on('touchstart', function(){	 
	$("#PlanetasyLunas").hide();
	$("#Orbitas").hide();
	$("#Estaciones").hide();
  	$("#Meteoritos").show();	
resVisible = "SistemaSolar";			
  });
});
$(document).ready(function(){
	$("#menuOrbitas").on('touchstart', function(){	 
	  $("#PlanetasyLunas").hide();
	  $("#Meteoritos").hide();
	  $("#Estaciones").hide();
      $("#Orbitas").show();		
resVisible = "SistemaSolar";			  
  });
});
$(document).ready(function(){
	$("#menuEstaciones").on('touchstart', function(){	 
	  $("#PlanetasyLunas").hide();
	  $("#Meteoritos").hide();
	  $("#Orbitas").hide();
      $("#Estaciones").show();		
resVisible = "SistemaSolar";			  
  });
});



$(document).ready(function(){
  $("#menuTiposEstrellas").on('click', function(){	 
	  $("#Espectrografia").hide();
	  $("#Coordenadas").hide();
	  $("#TiposEstrellas").show();	
resVisible = "Estrellas";			  
  });
});
$(document).ready(function(){
  $("#menuEspectrografia").on('click', function(){	 
	$("#TiposEstrellas").hide();
	$("#Coordenadas").hide();
	$("#Espectrografia").show();	
resVisible = "Estrellas";			  
  });
});
$(document).ready(function(){
  $("#menuCoordenadas").on('click', function(){	 
	  $("#TiposEstrellas").hide();
	  $("#Espectrografia").hide();
	  $("#Coordenadas").show();	
		resVisible = "Estrellas";			  
		  });
}); 

$(document).ready(function(){
  $("#menuTiposEstrellas").on('touchstart tap', function(){
	  $("#Espectrografia").hide();
	  $("#Coordenadas").hide();
	  $("#TiposEstrellas").show();	
resVisible = "Estrellas";			  
  });
});
$(document).ready(function(){
  $("#menuEspectrografia").on('touchstart tap', function(){
	$("#TiposEstrellas").hide();
	$("#Coordenadas").hide();
	 $("#Espectrografia").show();	
resVisible = "Estrellas";			  
  });
});
$(document).ready(function(){
  $("#menuCoordenadas").on('touchstart tap', function(){
	  $("#TiposEstrellas").hide();
	  $("#Espectrografia").hide();
	  $("#Coordenadas").show();	
resVisible = "Estrellas";			  
		  });
}); 


$(document).ready(function(){
$("#menuTransitos").on('click', function(){	 
	$("#Curvasdeluz").hide();
	$("#ZonaHabitabilidad").hide();
	$("#Densidad").hide();		       
	$("#Temperatura").hide();		       
	$("#LocGalaxia").hide();	
	$("#BasesDeDatos").hide();	
	$("#Misiones").hide();	
	$("#Exposicion").hide();	
	$("#Transitos").css("Visibility", "visible");
	$("#Transitos").show();		       	 

	resVisible = "#Exoplanetas";		
  });
});
$(document).ready(function(){
	$("#menuCurvasdeluz").on('click', function(){	 
	$("#Transitos").hide();
	$("#ZonaHabitabilidad").hide();	
	$("#Densidad").hide();		   
	$("#Temperatura").hide();	
	$("#BasesDeDatos").hide();	
	$("#Misiones").hide();	
	$("#Exposicion").hide();
	$("#LocGalaxia").hide();	
	$("#Curvasdeluz").css("Visibility", "visible");
			  $("#Curvasdeluz").show();		       

	resVisible = "#Exoplanetas";		
  });
});
$(document).ready(function(){
	$("#menuDensidad").on('click', function(){	 
	$("#Transitos").hide();
	$("#Curvasdeluz").hide();
	$("#ZonaHabitabilidad").hide();
	$("#Temperatura").hide();
	$("#BasesDeDatos").hide();	
	$("#Misiones").hide();	
$("#Exposicion").hide();	
	$("#LocGalaxia").hide();	
	$("#Densidad").css("overflow-x", "scroll");
	$("#Densidad").css("Visibility", "visible");
	$("#Densidad").show();		       

	resVisible = "#Exoplanetas";		
  });
  });
 $(document).ready(function(){
	$("#menuTemperatura").on('click', function(){	 
	$("#Transitos").hide();
	$("#Curvasdeluz").hide();
	$("#ZonaHabitabilidad").hide();
	$("#Densidad").hide();	
	$("#BasesDeDatos").hide();
	$("#Misiones").hide();	
$("#Exposicion").hide();	
	$("#LocGalaxia").hide();
	$("#Temperatura").show();	
	resVisible = "#Exoplanetas";		
  });
  });
$(document).ready(function(){
	$("#menuZonaHabitabilidad").on('click', function(){	 
	$("#Transitos").hide();
	$("#Curvasdeluz").hide();
	$("#Densidad").hide();	
	$("#Temperatura").hide();
	$("#LocGalaxia").hide();
	$("#BasesDeDatos").hide();
	$("#Misiones").hide();
$("#Exposicion").hide();	
	$("#ZonaHabitabilidad").css("overflow-x", "scroll");
	$("#ZonaHabitabilidad").css("Visibility", "visible");
	$("#ZonaHabitabilidad").show();		       

	resVisible = "#Exoplanetas";		
  });
}); 

 $(document).ready(function(){
	$("#menuLocGalaxia").on('click', function(){		
	$("#Transitos").hide();
	$("#Curvasdeluz").hide();
	$("#ZonaHabitabilidad").hide();
	$("#Densidad").hide();	
	$("#Temperatura").hide();	
	$("#BasesDeDatos").hide();
	$("#Misiones").hide();	
	$("#Exposicion").hide();
	$("#LocGalaxia").show();	
	resVisible = "#Exoplanetas";		
  });
  });
  
   $(document).ready(function(){
	$("#menuBasesDeDatos").on('click', function(){		
	$("#Transitos").hide();
	$("#Curvasdeluz").hide();
	$("#ZonaHabitabilidad").hide();
	$("#Densidad").hide();	
	$("#Temperatura").hide();	
	$("#LocGalaxia").hide();
	$("#Misiones").hide();	
	$("#Exposicion").hide();
	$("#BasesDeDatos").show();	
	resVisible = "#Exoplanetas";		
  });
  });
  
   $(document).ready(function(){
	$("#menuMisiones").on('click', function(){		
	$("#Transitos").hide();
	$("#Curvasdeluz").hide();
	$("#ZonaHabitabilidad").hide();
	$("#Densidad").hide();	
	$("#Temperatura").hide();	
	$("#LocGalaxia").hide();
	$("#BasesDeDatos").hide();	
	$("#Exposicion").hide();	
	$("#Misiones").show();	
	resVisible = "#Exoplanetas";		
  });
  });
  
$(document).ready(function(){
	$("#menuExposicion").on('click', function(){		
	$("#Transitos").hide();
	$("#Curvasdeluz").hide();
	$("#ZonaHabitabilidad").hide();
	$("#Densidad").hide();	
	$("#Temperatura").hide();	
	$("#LocGalaxia").hide();
	$("#BasesDeDatos").hide();	
	$("#Misiones").hide();	
	$("#Exposicion").show();	
	resVisible = "#Exoplanetas";		
  });
  });

$(document).ready(function(){
$("#menuTransitos").on('touchstart tap', function(){	 
	  $("#Curvasdeluz").hide();
	  $("#ZonaHabitabilidad").hide();
	  $("#Temperatura").hide();		       
	  $("#Densidad").hide();
	  $("#BasesDeDatos").hide();
	  $("#Misiones").hide();
$("#Exposicion").hide();	  
	  $("#LocGalaxia").hide();	  
	  $("#Transitos").show();	
    	resVisible = "#Exoplanetas";		
  });
});
$(document).ready(function(){
	$("#menuCurvasdeluz").on('touchstart tap', function(){	 
	$("#Transitos").hide();
	$("#ZonaHabitabilidad").hide();
	$("#Temperatura").hide();		       
	$("#Densidad").hide();	
	$("#LocGalaxia").hide();
	$("#BasesDeDatos").hide();
	$("#Misiones").hide();		
	$("#Exposicion").hide();

		  $("#Curvasdeluz").show();
		resVisible = "#Exoplanetas";		
  });
});
$(document).ready(function(){
		$("#menuZonaHabitabilidad").on('touchstart tap', function(){	 
	  $("#Transitos").hide();
	  $("#Curvasdeluz").hide();
	  $("#Temperatura").hide();		       
	 	$("#Densidad").hide();	
		$("#LocGalaxia").hide();
		$("#BasesDeDatos").hide();	
		$("#Misiones").hide();	
$("#Exposicion").hide();	  		
	  	$("#ZonaHabitabilidad").css("overflow-x", "scroll");
	  $("#ZonaHabitabilidad").show();
		resVisible = "#Exoplanetas";		
  });
}); 
$(document).ready(function(){
		$("#menuDensidad").on('touchstart tap', function(){	 
	  $("#Transitos").hide();
	  $("#Curvasdeluz").hide();	
	$("#Temperatura").hide();		       		
	  $("#ZonaHabitabilidad").hide();
	  $("#LocGalaxia").hide();
	  $("#BasesDeDatos").hide();
	  $("#Misiones").hide();
$("#Exposicion").hide();	  	  
	  $("#Densidad").show();
		resVisible = "#Exoplanetas";		
  });
});
$(document).ready(function(){
	$("#menuTemperatura").on('touchstart tap', function(){	 
	$("#Transitos").hide();
	$("#Curvasdeluz").hide();
	$("#ZonaHabitabilidad").hide();
	$("#Densidad").hide();	
	$("#LocGalaxia").hide();
	$("#BasesDeDatos").hide();
	$("#Misiones").hide();	
	$("#Exposicion").hide();	  
	$("#Temperatura").show();		
	resVisible = "#Exoplanetas";		
  });
  });
  
 $(document).ready(function(){
	$("#menuLocGalaxia").on('touchstart tap', function(){	 
	$("#Transitos").hide();
	$("#Curvasdeluz").hide();
	$("#ZonaHabitabilidad").hide();
	$("#Densidad").hide();	
	$("#Temperatura").hide();	
	$("#BasesDeDatos").hide();
	$("#Misiones").hide();	
	$("#Exposicion").hide();
	$("#LocGalaxia").show();	
	resVisible = "#Exoplanetas";		
  });
  });

 $(document).ready(function(){
	$("#menuBasesDeDatps").on('touchstart tap', function(){	 
	$("#Transitos").hide();
	$("#Curvasdeluz").hide();
	$("#ZonaHabitabilidad").hide();
	$("#Densidad").hide();	
	$("#Temperatura").hide();	
	$("#LocGalaxia").hide();
	$("#Misiones").hide();	
	$("#Exposicion").hide();	  
	$("#BasesDeDatos").show();

	resVisible = "#Exoplanetas";		
  });
  });
  
  $(document).ready(function(){
	$("#menuMisiones").on('touchstart tap', function(){	 
	$("#Transitos").hide();
	$("#Curvasdeluz").hide();
	$("#ZonaHabitabilidad").hide();
	$("#Densidad").hide();	
	$("#Temperatura").hide();	
	$("#LocGalaxia").hide();	
	$("#BasesDeDatos").hide();
	$("#Exposicion").hide();	  
	$("#Misiones").show();	

	resVisible = "#Exoplanetas";		
  });
  });
  
    $(document).ready(function(){
	$("#menuExposicion").on('touchstart tap', function(){	 
	$("#Transitos").hide();
	$("#Curvasdeluz").hide();
	$("#ZonaHabitabilidad").hide();
	$("#Densidad").hide();	
	$("#Temperatura").hide();	
	$("#LocGalaxia").hide();	
	$("#BasesDeDatos").hide();
	$("#Misiones").hide();	  
	$("#Exposicion").show();	

	resVisible = "#Exoplanetas";		
  });
  });

$(document).ready(function(){
  $("#menuFichas").click(function(){
    $("#subMenu").toggle();
  });
}); 

$(document).ready(function(){	
var Visto = false;
var resVisible = "#Presentacio";  
if(!mobil) {   
  $(".clicktouch").on('click', function(){	 
	  id = this.id;  
	  sharp = '#';
	  var capa = id.substring(4);
	  var res = sharp.concat(capa);	

	  if(resVisible != '#Fichas' && capa != 'Fichas') {	  
		$(resVisible).hide();
	  } 
	  	  
	  $(res).show();	
	  if(capa == 'Fichas') {	
		if(Visto) {
			$(res).hide();	
			Visto = false;			
		} else {		
			$(res).show();	
			Visto = true;			
		}
	  }
	
	  if (capa != 'Fichas') {
		resVisible = res;	  
	  }
  
	});
  }
  });


  $(document).ready(function(){	
  mobil = true;
  var resVisible = "#Presentacio";
  $(".clicktouch").on('touchstart', function(){	 
	 id = this.id;  
	  sharp = '#';
	  var capa = id.substring(4);
	  var res = sharp.concat(capa);	 
	   if(resVisible != '#Fichas') {	  
		$(resVisible).hide();
	  }  
	  $(res).show();	  
	  resVisible = res;	  
  
  });
  });
 