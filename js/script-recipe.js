$(document).ready( function(){
	$('.js-menu').hide();
	console.log('Documento HTML está listo');

	$('.js-show-make').on('click', function(){
 		$('.page').addClass('make');
 	});
	
	$('.js-show-recipe').on('click', function(){
 		$('.page').removeClass('make');
 	});
 
 	
});