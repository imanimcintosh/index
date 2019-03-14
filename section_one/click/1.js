var myArray = ["oranges","apples","pears",];

var myOtherArray= [43,22,55,66, myArray];

myOtherOtherArray= ["oranges",22,true,4.4["second list", "morevalues"]];


myArray.push("strawberries")//adding new values to our array//

console.log(myArray[0])

var myContainer = document.getElementById("container");

var myArrayContents =document.createElement("div");

// while loop//


var counter = 0;

while(counter<myArray.length){

    // append each element of out array

    var myListItem = document.createElement("li");
    myListItem.innerHTML = myArray[counter] + myOtherArray[counter];

    myContainer.appendChild(myListItem)


   counter++;
}

//for loop


for(var i = 0; i<myArray.length; i++) {
    var myListItem = document.createElement("li");
    myListItem.innerHTML=myArray[i];
    myContainer.appendChild(myListItem);
}