$('div').fadeIn(4000);

function setup() {
  var windowHeight = window.innerHeight;
  var windowWidth = window.innerWidth;
  console.log(windowHeight, windowWidth)
  createCanvas(windowWidth, windowHeight);
    background(255);
  }
  
  function draw() {
    stroke(0, 0, 255);
    strokeWeight(3);
    
    if (mouseIsPressed === true) {
      line(mouseX, mouseY, pmouseX, pmouseY);
    }
  }

  function windowResized() {

    //var windowHeight = window.innerHeight;
    // var windowWidth = window.innerWidth;

    // resizeCanvas(windowWidth, windowHeight) 


    //console.log("window changed", windowHeight, windowWidth)
   $("#defaultCanvas0").css({"width" : windowWidth + "px", "height" : windowHeight +"px" })
  }

 //$("#defaultCanvas0").attr("style", "width:100vw; height: 100vh;");
  