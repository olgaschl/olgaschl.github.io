$(document).ready(function () {
	/*$("#GEI").click(function () {$("#subMenu").toggle()});
    $(".calcular").click(calcularNotes);
    $(".reset").click(resetNotes);
    $(".texte").blur(perdreFocus);
    $(".texte").focus(teFocus);*/
	/*$("#menuPorque").click(function(){
		$("#Porque").slideToggle("slow");
	});
	$("#MenuHabitablidad").click(function(){
		$("#Habitabilidad").slideToggle("slow");
	});
	$("#menuDrake").click(function(){
		$("#Drake").slideToggle("slow");
	});*/
})

var pantalla = "presentacio";
var oldFase = "0";
function showPantalla(capa, fase){
	
    // Reset de l'ultima fase visitada
    if (oldFase!=0) {
        $(".nota"+oldFase).each(function (index) {
		$(this).attr("value", 0);
	});
        $("#notaFinal"+oldFase).attr("value","");
        $("#suspeses"+oldFase).attr("value","");
        $("#compensades"+oldFase).attr("value","");
        $("#fasecurri"+oldFase).attr("value","");
    }
    oldFase = fase;
	
    if (capa.id != pantalla){
	capaIni = document.getElementById(pantalla);
	capa = document.getElementById(capa);
	$("#error").addClass("hidden");
    $(capaIni).toggle();
	$(capa).toggle();
	pantalla=capa.id;
    }
}

function perdreFocus(){
    if (isNumber($(this).attr("value")) == false ){
        $(this).focus();
        $("#textError").text("Has d'insertar un número");
        $("#error").removeClass("hidden");
    }else{
        if ($(this).attr("value") < 0){
            $(this).focus();
            $("#textError").text("Has d'insertar un número igual o superior a 0");
            $("#error").removeClass("hidden");
        }else{
            if($(this).attr("value") > 10){
                $(this).focus();
                $("#textError").text("Has d'insertar un número inferior o igual a 10 ");
                $("#error").removeClass("hidden");
            }else{
                $("#error").addClass("hidden");
            }
        }
    }
}

function teFocus(){
    if (isNumber($(this).attr("value")) == false ){
        $("#textError").text("Has d'insertar un número");
        $("#error").removeClass("hidden");
    }else{
        if ($(this).attr("value") < 0){
            $("#textError").text("Has d'insertar un número igual o superior a 0");
            $("#error").removeClass("hidden");
        }else{
            if($(this).attr("value") > 10){
                $("#textError").text("Has d'insertar un número inferior o igual a 10 ");
                $("#error").removeClass("hidden");
            }else{
               $("#error").addClass("hidden");
            }
        }
    }
}

function resetNotes(){
    // Cada voto té un atribut amb la fase que està, i així treballar amb els camps d'aquella fase.
    fase = $(this).attr("fase");

	$(".nota"+fase).each(function (index) {
					    $(this).attr("value", 0);
				    });

	$("#notaFinal"+fase).attr("value","");
	$("#suspeses"+fase).attr("value","");
	$("#compensades"+fase).attr("value","");
	$("#fasecurri"+fase).attr("value","");
    $("#error").addClass("hidden");
}

function calcularNotes(){
	var credits = new Array();
	var creditsTotal = 0;
	var notes = new Array();
	var notaFinal = 0;
	var notesSuspeses = 0;
	var notesCompensades = 0;
    var totCorrecte = true;

    // Cada voto té un atribut amb la fase que està, i així treballar amb els camps d'aquella fase.
    fase = $(this).attr("fase");

	$(".credits"+fase).each(function () {
					        credits.push(parseFloat($(this).attr("value")));
					        creditsTotal += parseFloat($(this).attr("value"));
				       });

	$(".nota"+fase).each(function (index) {
                        if (isNumber($(this).attr("value")) == false || $(this).attr("value") < 0 || $(this).attr("value") > 10)
                        {
                            totCorrecte = false;
                        }
					    notes.push(parseFloat($(this).attr("value")));
					    if (parseFloat($(this).attr("value"))<4)
					    {
						    notesSuspeses += 1;
					    }
					    if (parseFloat($(this).attr("value")) >= 4 && parseFloat($(this).attr("value")) < 5)
					    {
						    notesCompensades += 1;
					    }
					    notaFinal += (parseFloat($(this).attr("value")) * credits[index] / creditsTotal);
				    });

    if (totCorrecte)
    {
	    notaFinal = Math.round(notaFinal*100)/100;
	    $("#notaFinal"+fase).attr("value",notaFinal);
	    $("#suspeses"+fase).attr("value",notesSuspeses);
	    $("#compensades"+fase).attr("value",notesCompensades);
	    if ( notesSuspeses > 0 || notesCompensades > 2 || notaFinal < 5)
	    {
		    $("#fasecurri"+fase).attr("value","No Apte");
	    }else{
		    $("#fasecurri"+fase).attr("value","Apte");
	    }
    }else{
	    $("#notaFinal"+fase).attr("value","");
	    $("#suspeses"+fase).attr("value","");
	    $("#compensades"+fase).attr("value","");
	    $("#fasecurri"+fase).attr("value","");
    }
}

function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

