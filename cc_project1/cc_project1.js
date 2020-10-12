// Adjective: Muted

let boomTop = 90; 
let boomBottom = 130; 

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(221,246,235);
  speakers();
  visualScreen();
  speakerMovement();
  screenGraphics();
  remote();
}

function speakers(){
  fill(22,24,23);
  rect(50,350,200,400) // Left Speaker
  rect(1050,350,200,400) // Right Speakers
}

function speakerMovement(){
  // Left Speaker 
  fill(0);
  ellipse(150,620,boomBottom); // Bottom Ellipse
  ellipse (150,450,boomTop); // Top Ellipse
  fill(0, 80);
  noStroke();
  ellipse(150,620,150); // Bottom Ellipse Shadow
  ellipse (150,450,110); // Top Ellipse
  
  // Right Speaker
  fill(0);
  ellipse(1150,620,boomBottom); // Bottom Ellipse
  ellipse (1150, 450, boomTop); // Top Ellipse
  fill(0, 80);
  noStroke();
  ellipse(1150,620,150); // Bottom Ellipse Shadow
  ellipse (1150,450,110); // Top Ellipse
  
  // Boom Movement 
  boomBottom += 0.5;
  boomTop += 0.5; 
 
  if (boomBottom == 140 && boomTop == 100){
    boomBottom = 130; 
    boomTop = 90;
  }
}

function visualScreen(){
  fill(22,24,23);
  rect(300, 50, 700, 350) // TV
  fill(0); 
  rect(315, 65, 670, 320)
  
}

function screenGraphics(){
  fill(68,70,69);
  rect(315, 335, 670, 50);
}

function remote(){
  fill(22,24,23); 
  quad(575, 600, 725, 600, 785, 900, 515, 900) // Remote
  fill(0,80);
  noStroke();
  ellipse(600,625,30); // powerBtn shadow
  fill(198,7,7);// red
  ellipse(600,625,25);// powerBtn
  
  
 
}
