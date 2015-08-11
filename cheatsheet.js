//jQuery library
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"> </script>


//code does not run until documents fires the following ready event
$(document).ready(function(){
	
	alert("The document is ready"); /*alert functions are pop ups*/

$("body").hide(); /*hides an element on the page*/

$("body").show(); /*shows an element on the page*/

$("#leftDIV").fadeOut(1000) /*using fade animation to fade out. 1000 fades out over 1 second*/

$("#leftDive").fadeIn(6000) /*using fade animation to fade in.6000 fades out over 6 seconds*/

$("#column1").slideUp /*image slides up*/

$("#columm2").slideDown(3000) /*image slides down over 3 seconds*/

//animating css (numeric properties)
$(".li").animate({
	opacity: 0.5,  
	width: 40%
}, 2000);

//click event. when clicked pops up "clicked!"
$("ul li a").click(
	function()){
	alert("clicked!");
}

//callback. when on animation is triggering another using anonymous functions 
var animateMenu = function (){
	$(".menu").animate ({opacity: 0.5})
}
$(".menu").show(animateMenu)




};