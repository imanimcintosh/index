$('div').fadeIn(4000);

function setup() {
    createCanvas(2200, 2110);
    background(255);
  }
  
  function draw() {
    stroke(0, 0, 255);
    strokeWeight(3);
    
    if (mouseIsPressed === true) {
      line(mouseX, mouseY, pmouseX, pmouseY);
    }
  }

 $("#defaultCanvas0").attr("style", "width:100vw; height: 100vh;");
  