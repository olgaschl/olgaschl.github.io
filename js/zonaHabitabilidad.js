$(document).ready(function () {

			init();
			var x = null;		
								
			//Make element draggable    
			$(".planetaRocoso, .planetaGaseoso, .planetaTierra, .planetaAnillos, .planetaHelado").draggable({
				helper: 'clone',
				cursor: 'move',
				tolerance: 'fit'				
			});

					$("#droppable").droppable({

						drop: function (e, ui) {

							if ($(ui.draggable)[0].id != "") {
								x = ui.helper.clone();
								ui.helper.remove();
								x.draggable({
									helper: 'original',
									containment: '#droppable',
									tolerance: 'fit',
									drop: function (event, ui) {
										$(ui.draggable).remove();
									}
								});								
								x.resizable();
								x.draggable();
								x.addClass('remove');
								x.appendTo('#droppable');								
								
							}

						}
					});	

					$("#remove-drag").droppable({
						drop: function (event, ui) {
							$(ui.draggable).remove();
						},
						hoverClass: "remove-drag-hover",
						accept: '.remove'
					});			
						
								
		 
			$("#resizable4").resizable();
			
			$("#resizable4").resize(function() {
				canviaColor();
			}) 			
			//$("#resizable4").draggable();		
		
		} );
  
  function canviaColor() {
    
	var width = document.getElementById('resizable4').offsetWidth;	
	
	if (width < 25) {		
			
			document.getElementById("resizable4").style.backgroundImage = "url('images/maroonStar.jpeg')";	
			document.getElementById("resizable4").style.boxShadow = "0px 0px 0px 5px hsl(0, 0%, 100%), 0px 0px 0px 9px hsl(152, 32%, 87%)";
			document.getElementById("starSpan").textContent="Enana Marrón (L)";
			document.getElementById("resizable4").style.left="573px";				

        } else if (width >= 25 && width < 40) {
						
			document.getElementById("resizable4").style.backgroundImage = "url('images/redStar.png')";		
			document.getElementById("resizable4").style.boxShadow = "0px 0px 0px 7px hsl(0, 0%, 100%), 0px 0px 0px 50px hsl(152, 32%, 87%)";			
			document.getElementById("starSpan").textContent="Enana Roja (M)";
			document.getElementById("resizable4").style.left="567px";				
			
        } else if (width >= 40 && width < 45) {   		
			document.getElementById("resizable4").style.backgroundImage = "url('images/orangeStar.png')";
			document.getElementById("resizable4").style.boxShadow = "0px 0px 0px 60px hsl(0, 0%, 100%), 0px 0px 0px 150px hsl(152, 32%, 87%)";									
			document.getElementById("starSpan").textContent="Enana Naranja (K)";
			document.getElementById("resizable4").style.left="560px";				
		
        } else if (width >= 50 && width < 55) {            
			document.getElementById("resizable4").style.backgroundImage = "url('images/yellowStar.png')";
			document.getElementById("resizable4").style.boxShadow = "0px 0px 0px 120px hsl(0, 0%, 100%), 0px 0px 0px 360px hsl(152, 32%, 87%)";						
			document.getElementById("starSpan").textContent="Estrella tipo Sol (G)";
			document.getElementById("resizable4").style.left="557px";				
		
        } else if (width >= 55 && width < 100) {			 		
            document.getElementById("resizable4").style.backgroundImage = "url('images/yellowStar2.png')";			
			document.getElementById("resizable4").style.boxShadow = "0px 0px 0px 135px hsl(0, 0%, 100%), 0px 0px 0px 630px hsl(152, 32%, 87%)";									
			document.getElementById("starSpan").textContent="Estrella tipo F";
			document.getElementById("resizable4").style.left="550px";				
			
		} else if (width >= 100) {            
			document.getElementById("resizable4").style.backgroundImage = "url('images/whiteStar2.jpg')";
		//	document.getElementById("resizable4").style.boxShadow = "0px 0px 0px 200px hsl(0, 0%, 100%), 0px 0px 0px 350px hsl(152, 32%, 87%)";									
			document.getElementById("resizable4").style.boxShadow = "0px 0px 0px 0px hsl(0, 0%, 100%), 0px 0px 0px 0px hsl(100, 100%, 100%)";					
			document.getElementById("starSpan").textContent="Estrella tipo A";
			document.getElementById("resizable4").style.left="530px";				
    }
	
  }  		
  
  // per mòbils, que funcioni el drag
  function touchHandler(event) {
    var touch = event.changedTouches[0];

    var simulatedEvent = document.createEvent("MouseEvent");
        simulatedEvent.initMouseEvent({
        touchstart: "mousedown",
        touchmove: "mousemove",
        touchend: "mouseup"
    }[event.type], true, true, window, 1,
        touch.screenX, touch.screenY,
        touch.clientX, touch.clientY, false,
        false, false, false, 0, null);

    touch.target.dispatchEvent(simulatedEvent);
  //  event.preventDefault();
}
  
  function init() {
				document.addEventListener("touchstart", touchHandler, true);
				document.addEventListener("touchmove", touchHandler, true);
				document.addEventListener("touchend", touchHandler, true);
				document.addEventListener("touchcancel", touchHandler, true);
			}
  
/*	function togglePopup() {
		var popup = document.getElementById("myPopup");
		popup.classList.toggle("show");
	}*/