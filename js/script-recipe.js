$(document).ready( function(){
	$('.js-menu').hide();
	console.log('Documento HTML está listo');

	$('.js-show-make').on('click', function(){
 		$('.page').addClass('make');
 	});
	
	$('.js-show-recipe').on('click', function(){
 		$('.page').removeClass('make');
 	});
 
 	$('.js-show-make').on('click', function(){
 		$('.js-show-make').addClass('active');
 		$('js-show-recipe').removeClass('active');
 	});

 	$('.js-show-recipe').on('click', function(){
 		$('.js-show-recipe').addClass('active');
 		$('js-show-make').removeClass('active');
 	});
	
 	$('.js-back').click(function() {
        $(window).attr('location','index.html');
    });

});




