var comptador;
var numero_comptador;         <!--counter-->
var opac; 							<!--opacity for element-->
var opac2;  						<!--opacity for element2-->
var pas; 							<!--opacity step-->
var showtime; 						<!--time to show the picture between changes-->
var transition_time; 			<!--transition_time * 100 = time of transition in miliseconds--> 
var pic_count; 					<!--next picture to use-->
var pic_max; 						<!-- number of pictures in the slideshow-->
var element;						<!--referes to the first picture-->
var element2;						<!--referes to the second picture-->

function inici_comptador() {
    numero_comptador = 0;
    pas = 0.01;
    showtime = 5000;
    transition_time = 20; 
    pic_count = 2;
    pic_max = 19;
    element = document.getElementById("opa");
    element2 = document.getElementById("opa2");
    

    comptador = setTimeout('countdown_trigger()', showtime);
    <!--countdown_trigger();-->
    element.style.opacity = 0;
    element2.style.opacity = 1;

}

function countdown_trigger() {
    if(numero_comptador < 1) {
        numero_comptador = (numero_comptador*1000 + pas*1000)/1000;

        opac = numero_comptador;
        opac2 = 1-opac;
       
        element.style.opacity = opac;
        element2.style.opacity = opac2;
        if(numero_comptador > 0) {
            comptador = setTimeout('countdown_trigger()', transition_time);
        }        
    }
    else{
    		<!--AQUI CANVIAR IMATGE la que arriba a 0-->
    			pic_count++;
    			element2.src = "images/recomendaciones/recom" + pic_count + ".jpg";
    			if (pic_count == pic_max) {
					pic_count = 0;    			
    			}
            comptador = setTimeout('countup_trigger()', showtime);
    }
}

function countup_trigger() {

    if(numero_comptador > 0.01) {
        numero_comptador = (numero_comptador*1000 - pas*1000)/1000;

        opac = numero_comptador;
        opac2 = 1-opac;
     
        element.style.opacity = opac;
        element2.style.opacity = opac2;

        if(numero_comptador > 0) {
            comptador = setTimeout('countup_trigger()', transition_time);
        }
        
    }
    else{
    		<!--AQUI CANVIAR IMATGE la que arriba a 0-->
    			pic_count++;

    		   element.src = "images/recomendaciones/recom" + pic_count + ".jpg";
    			if (pic_count == pic_max) {
					pic_count = 0;    			
    			}
            comptador = setTimeout('countdown_trigger()', showtime);
    }
}



function countdown_clear() {
    clearTimeout(comptador);
}