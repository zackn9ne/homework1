console.log( "app.js was just hit" );

var weeksInYear = 52;
var weeksElapsed = 41;
var remainingWeeks = weeksInYear - weeksElapsed + " more weeks";

var greet = "hello ";
var who = "class ";
var greeting = greet + who;

var one = 1;
var two = 2;
var result = one + two;

document.addEventListener('DOMContentLoaded', function(){

	document.getElementById("greeting") .innerHTML = greeting;
	document.getElementById("weeks") .innerHTML = remainingWeeks;

}, false); 

document.write ('<h2>' + 'your answer is: ' + result + '</h2>');
