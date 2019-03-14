console.log("testing!")
var myList = document.getElementById("wrapper");

var myNewElement = document.createElement("li");//can be a div also//

myNewElement.className ="myaddedListElement";
myNewElement.innerHTML= "this is a new list element!"

myList.appendChild(myNewElement);



//
var myButton = document.getElementById("imageButton");
var myImageContainer = document.getElementById("imageContainer");

var addImage =function(){

    var myImage = document.createElement("img");
    myImage. src ="faucet.png";
    MyImageContainer. appendChild(myImage);
}

myButton.onclick = addImage;
//

//what do i want to add in click //

var myFunction =function(){
    var myNewElement = document.createElement("li");

    myNewElement.className ="myaddedListElement";
    myNewElement.innerHTML= "this is a new list element!"
    
    myList.appendChild(myNewElement);


}

myList.onclick = myFunction;