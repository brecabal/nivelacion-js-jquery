$(document).ready( function(){

	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
	
		$('.js-back').hide();
		renderActivities(activitiesArray);

	function printNews(){
		$('.receta-nueva').text('NUEVAS RECETAS');
	}
	printNews();

	renderHighlightedRecipes(recipesArray);

	
});


/*
* Función que se encarga de pintar TODAS las recetas que tengan 
* marcado el atributo "highlighted" como TRUE
*/
function renderHighlightedRecipes(recipesArray) {
	console.log('Recipes: ', recipesArray);

	for ( var i = 0; i < recipesArray.length; i++){
 		if(recipesArray[i].highlighted==true){
 			var recetas = recipesArray[i];
 			renderRecipe(recetas);
 			//console.log('Recipes: ', recipesArray[i]);
 		}
 	}
};


/*
* Función que se encarga de pintar UNA recetas que tenga 
* marcado el atributo "highlighted" como TRUE
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-recipe.html"
*/
function renderRecipe(recipe) {
	console.log('Voy a pintar la receta: ', recipe);


	var titulo = recipe.title;
 	var nombre = recipe.source.name;
 	var imagen = recipe.name;

	$('.list-recipes').append('<a class="item-recipe" href="#"><span class="attribution"><span class="title-recipe">'+titulo+'</span><span class="metadata-recipe"><span class="author-recipe">'+nombre+' </span><span class="bookmarks-recipe"><span class="icon-bookmark"></span></span></span></span><img src="img/recipes/320x350/'+imagen+'.jpg"/></a>');

};



/*
* Función que se encarga de pintar todas las actividades
*/

function renderActivities(activitiesArray) {
	console.log('Activities: ', activitiesArray);

		for(var i = 0; i < activitiesArray.length; i++){
    		renderActivity(activitiesArray[i]); 
    		
      	}
  		if(activitiesArray.length > 0){
      		$('.wrapper-message').hide();
    }
  
};


    


/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"
*/
function renderActivity(recipe) {
	
	
	//$('.list-activities').append('<a href="#" class="item-activity"><span class="attribution"><span class="avatar"><img src="'+activitiesArray[0].userAvatar+'".jpg class="image-avatar"></span><span class="meta"><span class="author">'+activitiesArray[0].userName+'</span> made<span class="recipe">'+activitiesArray[0].recipeName+'</span>: '+activitiesArray.text+' <span class="location">&mdash;'+activitiesArray[0].place+'</span></span></span><div class="bg-image" style="background-image: url(\''+activitiesArray[0].image+'\');"></div></a>');

	//var avatar = recipe.userAvatar;
    //var usuario = recipe.userName;
    //var receta = recipe.recipeName;
    //var texto = recipe.text;
    //var lugar = recipe.place;
    //var imagen = recipe.image;

    //$('list-activities').append('<a class="item-activity" href="#"><span class="attribution"><span class="avatar"><img src="img/activity/activity-placeholder-strawberry-640x640"'+avatar+'class="image-avatar"</span><span class="meta"><span class="author">'+usuario+'</span><span class="recipe"?'+receta+'</span>'+texto+'<span class="location">&mdash;'+lugar+'<span></span></span><div class="bg-image" style="background-image:url(../img/activity/activity-placeholder-strawberry-640x640.jpg"'+imagen+'</div></a>);
}



