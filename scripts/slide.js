$(document).ready(function() {
	
	// Expand Panel Login
	$("#open").click(function(){
		$("div#panel").slideDown("slow");
	
	});	
	
	// Collapse Panel Login
	$("#close").click(function(){
		$("div#panel").slideUp("slow");	
	});		
	
	// Expand Panel My Account
	$("#open").click(function(){
		$("div#AC_panel").slideDown("slow");
	
	});	
	
	// Collapse Panel My Account
	$("#close").click(function(){
		$("div#AC_panel").slideUp("slow");	
	});	
	
	// Switch buttons from "Log In | Register" to "Close Panel" on click
	//$("#toggle a").click(function () {
	//	$("#toggle a").toggle();
	//});		
		
});