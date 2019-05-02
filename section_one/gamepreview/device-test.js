var ball   = document.querySelector('.ball');
var garden = document.querySelector('.garden');
var output = document.querySelector('.output');

var maxX = garden.clientWidth  - ball.clientWidth;
var maxY = garden.clientHeight - ball.clientHeight;

function handleOrientation(event) {
  var x = event.beta;  // In degree in the range [-180,180]
  var y = event.gamma; // In degree in the range [-90,90]

console.log("testing", x, y)

  output.innerHTML  = "beta : " + x + "\n";
  output.innerHTML += "gamma: " + y + "\n";

  // Because we don't want to have the device upside down
  // We constrain the x value to the range [-90,90]
  if (x >  90) { x =  90};
  if (x < -90) { x = -90};

  // To make computation easier we shift the range of 
  // x and y to [0,180]
  x += 90;
  y += 90;
    // we know we have a minimum of 0 and a maximum of 180
    // so 180 = 100%, while 0 is = 0%

    var percentageComplete = x/180;

    var red = 255 - (255 * percentageComplete);
    var blue = 0 + (255 * percentageComplete);



    // more specific rgb colors: 
    // rgb(183, 44, 58)
    // rgb(4, 0, 140)
    // red = 183 - (179 * percentageComplete)
    // green = 44 - (44 * percentageComplete)
    // blue 58 + (82 * percentageComplete)


  // 10 is half the size of the ball
  // It center the positioning point to the center of the ball
  ball.style.top  = (maxX*x/180 - 10) + "px";
  ball.style.left = (maxY*y/180 - 10) + "px";

  //change color:
  ball.style.backgroundColor = "rgb("+ red + ",0," + blue + ")"

  // red rgb(255,0,0)
  // blue rgb(0,0,255)
}

window.addEventListener('deviceorientation', handleOrientation, true);


/*function handleOrientationTest(e) {
    var beta     = e.beta;
    var gamma    = e.gamma;


    document.getElementById("gamma").innerHTML = "testing " +  gamma;
    document.getElementById("beta").insertAdjacentHTML('afterend', '<div id="two">'+ beta + '</div>');

        // Do stuff with the new orientation data
    }
                
    window.addEventListener("deviceorientation", function(){
        alert("changed!!!!")
    }, true);*/