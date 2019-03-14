var eye = document.getElementById("eye");
var eye = document.getElementById("eye");
var eye = document.getElementById("eye");
var addingAListElement = function(){

	console.log(eye.innerHTML.length)

	if(eye.innerHTML.length > 500){
		eye.innerHTML = "";
	}else{
		console.log("test")

		var myNewElement = document.createElement("div");
		myNewElement.className = "important";
		//myNewElement.id = "newId";
		myNewElement.innerHTML = "eye";

		//var myNode = document.createTextNode("some other text!");
		//var myOtherNode = document.createTextNode("some other other text!");

		//myNewElement.appendChild(myNode)
		//myNewElement.appendChild(myOtherNode)

		eye.appendChild(myNewElement)
	}



}


eye.onclick = function(){addingAListElement()}

