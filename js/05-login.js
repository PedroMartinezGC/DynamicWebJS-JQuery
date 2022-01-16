$(document).ready(function(){

	//Login falso

	$("#login form").submit(function(){
		var form_name = $('#form_name').val();

		localStorage.setItem("form_name", form_name);
		
	});

	var form_name = localStorage.getItem("form_name");
	var tema = localStorage.getItem('theme');
	console.log('este tema que se va a poner es '+tema);

	$('#theme').attr('href', 'css/'+tema+'.css');

	if(form_name != null && form_name != 'undefinded' ){
		var p2 = document.createElement('p');
		var p3 = document.createElement('p');

		p2 = ("<br/><br/><hr><br/><strong>Bienvenido, "+form_name+"</strong>");
		p3.innerHTML = ("<br/><button id = button-out><a href = # id = logout>Cerrar sesión</a></button>");

		$("#about p").append(p2);
		$("#about p").append(p3);

		$("#login").hide();

		$("#logout").click(function(){
			localStorage.removeItem('form_name');
			location.reload();
		});	
	}
});