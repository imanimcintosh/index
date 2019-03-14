
var myArray = ["MENTAL>>>", 
               "NOTE>>>", 
               "PAPER>>>",
               "CLIP>>>",
"ART>>>",
"AUCTION>>>",
"SWITCH>>>",
"GAME>>>",];

var myOtherArray = ["NOTE","PAPER","CLIP","ART","AUCTION","OFF","BOARD"];
var z = 0;
var myContainer = document.getElementById("container");


var counter = 0; 

for (var i = 0; i < myArray.length; i++){
        var myListItem = document.createElement("li");
        myListItem.innerHTML = myArray[i] + " "+ myOtherArray[i];
        myContainer.appendChild(myListItem);
    }

//for loop

