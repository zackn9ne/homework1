console.log( "app.js was just hit" );

document.addEventListener("DOMContentLoaded", function(event) {

    //DOM stuff
    var recipeBtnDiv = document.getElementById('recipeBtnDivId');

    //DOM thing
    recipeBtnDiv.addEventListener("click", function(){recipeFunc()}, false);

});

var recipeFunc = function(){
    makeCoffee('some alligator blood');
}


var makeCoffee = function(secretIngredient) {
    document.getElementById('displayRecipeDivId').innerHTML = '<ul>' + '<li>' + 'add water and coffee grounds' + '</li>' + '<li>' + 'let it brew' + '<li>' + 'add sugar' + '</li>' + '<li>' + secretIngredient + '</li>' + '<li>' + 'and stir' + '</li>' + '</ul>';

console.log(secretIngredient);
}






