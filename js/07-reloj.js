$(document).ready(function(){

	setInterval(function(){
		var reloj = moment().format('h:mm:ss a');
		$('#reloj').html(reloj);

	}, 1000);
});