// JavaScript Document
$(document).ready(function(){  
	$('#grafica').bind('click tap touchstart', function(e) {
	//$('.boto').bind('click tap touchstart', function(e) {
		pintaGrafica();
	});  
});

function createConfig(details, data) {
								return {
									type: 'line',
									data: {
										labels: ['t1', 't2', 't3', 't4', 't5', 't6'],
										datasets: [{
											label: 'Tránsito',
											//label: 'Curva de luz ' + details.steppedLine,
											//steppedLine: details.steppedLine,
											data: data,
											borderColor: details.color,
											fill: false,
										}]
									},
									options: {
										responsive: true,
										title: {
											display: true,
											text: 'Curva de luz',
										}
									}
								};
							}



function pintaGrafica() { 
    var container = document.querySelector('.container');		
	if (document.getElementById("container").childNodes.length > 1) {	
		var list = document.getElementById("container");   		
		list.removeChild(list.childNodes[1]); 
	}
									
	var b = new Array(6);
	var i;
	
    for (i=1;i<7; i++)
        { 
         b[i]=$("#b"+i).val();
        } 	
    
	var data = b;	
								
								var steppedLineSettings = [{
									steppedLine: false,
									//label: 'No Step Interpolation',
									color: window.chartColors.red
								}
								
								/*, {
									steppedLine: true,
									label: 'Step Before Interpolation',
									color: window.chartColors.green
								}, {
									steppedLine: 'before',
									label: 'Step Before Interpolation',
									color: window.chartColors.green
								}, {
									steppedLine: 'after',
									label: 'Step After Interpolation',
									color: window.chartColors.purple
								}*/
								];

								steppedLineSettings.forEach(function(details) {
									var div = document.createElement('div');
									div.classList.add('chart-container');

									var canvas = document.createElement('canvas');
									div.appendChild(canvas);
									container.appendChild(div);

									var ctx = canvas.getContext('2d');
									var config = createConfig(details, data);
									new Chart(ctx, config);
								});
}	  