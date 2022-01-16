$(document).ready(function(){

//Comprobante del último tema del local storage

	var theme = $('#theme');
	var arraylocal = [];
	var tema_anterior;


	for(var i in localStorage){
		if(typeof localStorage[i] == 'string'){
			arraylocal.push(localStorage[i]);

		}
	}
	console.log(arraylocal);
	console.log("El último tema es: " +arraylocal[arraylocal.length - 1]);

	tema_anterior = arraylocal[arraylocal.length - 1];


	//Selector de tema
	
	if(tema_anterior == 'green'){
		theme.attr('href', 'css/green.css');
	}
	if(tema_anterior == 'red'){
		theme.attr('href', 'css/red.css');
	}
	if(tema_anterior == 'blue'){
		theme.attr('href', 'css/blue.css');
	}
	

	$('#to-red').click(function(){
		console.log("Has pulsado sobre el botón rojo");

		theme.attr('href', 'css/red.css');
		localStorage.clear();
		localStorage.setItem('theme', 'red');

	});
	$('#to-green').click(function(){
		console.log("Has pulsado sobre el botón verde");

		theme.attr('href', 'css/green.css');
		localStorage.clear();
		localStorage.setItem('theme', 'green');
	});
	$('#to-blue').click(function(){
		console.log("Has pulsado sobre el botón azul");

		theme.attr('href', 'css/blue.css');
		localStorage.clear();
		localStorage.setItem('theme', 'blue');
	});



});
