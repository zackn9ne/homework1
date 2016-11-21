console.log( "app.js was just hit" );




document.addEventListener('DOMContentLoaded', function(){


var recipeBtnDiv = document.getElementById('recipeBtnDivId');
recipeBtnDiv.addEventListener("click", function(){recipeFunc()}, false);

});

function makeCoffee(x) {
document.getElementById('displayRecipeDivId').innerHTML = '<ul>' + '<li>' + 'add water and coffee grounds' + '</li>' + '<li>' + 'let it brew' + '<li>' + 'add sugar' + '</li>' + '<li>' + x + '</li>' + '<li>' + 'and stir' + '</li>' + '</ul>';
}

function recipeFunc(){
makeCoffee('some alligator blood');
}




