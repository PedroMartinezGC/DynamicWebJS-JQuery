$(document).ready(function(){


var posts = [
		{
			title: 'Articulo 1',
			date: 'Publicado el día '+moment().date()+' de '+moment().format("MMMM")+' de '+moment().format("YYYY"),
			content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
		},
		{
			title: 'Articulo 2',
			date: 'Publicado el día '+moment().date()+' de '+moment().format("MMMM")+' de '+moment().format("YYYY"),
			content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
		},
		{
			title: 'Articulo 3',
			date: 'Publicado el día '+moment().date()+' de '+moment().format("MMMM")+' de '+moment().format("YYYY"),
			content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
		},
		{	title: 'Articulo 4',
			date: 'Publicado el día '+moment().date()+' de '+moment().format("MMMM")+' de '+moment().format("YYYY"),
			content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
		}
	];
	console.log(posts);

	posts.forEach((elemento, index)=>{
		var post = `<article class = "post">
						<h2>${elemento.title}</h2>
						<span class = "date">${elemento.date}</span>
						<p>
							${elemento.content}
						</p>
						<a href = "#" class = "button-more">Leer más</a>
					</article>
					`;
		$('#posts').append(post);
	});


});