$('div').fadeIn(4000);

function setup() {
    createCanvas(970, 2110);
    background(255);
  }
  
  function draw() {
    stroke(0, 0, 255);
    strokeWeight(3);
    
    if (mouseIsPressed === true) {
      line(mouseX, mouseY, pmouseX, pmouseY);
    }
  }


  