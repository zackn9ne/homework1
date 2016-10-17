console.log("app.js was just hit");
var fruits = "grapes, apple, strawberries, pineapple";
var smoothie = [fruits, 'celery', 'broccoli', 'pumpkin', 'some sugar'];

document.addEventListener('DOMContentLoaded', function(){

	document.getElementById("mysmoothie") .innerHTML = smoothie [0] + ', ' + smoothie [3] + ', and ' + smoothie [4];

}, false); 
