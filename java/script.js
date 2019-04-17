
var myString = "hello this is a string!"
var myNumber = 20;
var letterSpacinValue = 1;
var myBoolean = false;

//getting a div via its id
var myDiv = document.getElementById("wrapper");

var myFunction = function(){


if (myBoolean==true){
    myBoolean= false;
    myNumber = myNumber + 10;

}else{
    myBoolean = true;
    myNumber = myNumber -8;
}

console.log(myNumber)
myDiv.style.fontSize = myNumber + "px"; 
}

var anotherFunction = function(){

if (myNumber<40)  {
// keep growing

myNumber= myNumber + 2;
}else{

    // reset at small value
   myNumber = 20;
}

myDiv.style.fontSize= myNumber = "px";
}




var classFunction = function (){
    console.log("hey this is our class function ")
}
myDiv.onclick = myFunction;


