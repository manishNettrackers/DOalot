function showHideStuff(id,idSuffix,length){
//   document.getElementById(boxid).style.display="block";

	for(var i=0;i<length;i++){
	  document.getElementById(idSuffix+(i+1)).style.display="none";	
	}
	document.getElementById(idSuffix+id).style.display="block";
}

function showStuff(value1,value2,value3,value4,value5,value6,value7,value8,value9,value10){
	
	document.getElementById(value1).style.display="block";
	document.getElementById(value2).style.display="block";
	document.getElementById(value3).style.display="block";
	document.getElementById(value4).style.display="block";
	document.getElementById(value5).style.display="block";
	document.getElementById(value6).style.display="block";
	document.getElementById(value7).style.display="block";
	document.getElementById(value8).style.display="block";
	document.getElementById(value9).style.display="block";
	document.getElementById(value10).style.display="block";

}

function hideStuff(value1,value2,value3,value4,value5,value6,value7,value8,value9,value10){
	
	document.getElementById(value1).style.display="none";
	document.getElementById(value2).style.display="none";
	document.getElementById(value3).style.display="none";
	document.getElementById(value4).style.display="none";
	document.getElementById(value5).style.display="none";
	document.getElementById(value6).style.display="none";
	document.getElementById(value7).style.display="none";
	document.getElementById(value8).style.display="none";
	document.getElementById(value9).style.display="none";
	document.getElementById(value10).style.display="none";

}

function showHidePop(value1,value2,value3,value4,value5,value6,value7,value8,value9,value10){
	
	document.getElementById(value1).style.display="none";
	document.getElementById(value2).style.display="none";
	document.getElementById(value3).style.display="none";
	document.getElementById(value4).style.display="block";
	document.getElementById(value5).style.display="block";
	document.getElementById(value6).style.display="block";
	document.getElementById(value7).style.display="none";
	document.getElementById(value8).style.display="none";
	document.getElementById(value9).style.display="none";
	document.getElementById(value10).style.display="none";

}
