console.log( "app.js was just hit" );

var recipeBtnDiv = document.getElementById('recipeBtnDivId');

function makeCoffee(x) {
console.log(document.getElementById('displayRecipeDivId').innerHTML = '<ul>' + '<li>' + 'add water and coffee grounds' + '</li>' + '<li>' + 'let it brew' + '<li>' + 'add sugar' + '</li>' + '<li>' + x + '</li>' + '<li>' + 'and stir' + '</li>' + '</ul>');
}

function recipeFunc(){
makeCoffee('some alligator blood');
}

recipeBtnDiv.addEventListener("click", function(){recipeFunc()}, false);




// WORKED FINE IN JSBIN AND IN THE CONSOLE BUT NOT HERE. EVEN TRIED THIS:

// document.addEventListener('DOMContentLoaded', function(){

// recipeBtnDiv.addEventListener("click", function(){recipeFunc()}, false);

// }, false); 