// Chloe Chan Project 1
// Speakers
let boomTop = 90;
let boomBottom = 130;
//Screen Graphics
let raindrops = [];

// Remote
let remote;
let channelDown;
let channelUp;
let muteBtn;
let volUp;
let volDown;
let colorBtn;

// Button Creation
let muteButton;
let volumeUpButton;
let volumeDownButton

// Button Functionality
let counter = 0;
let colorCounter = 0;
let soundGraphicOpacity = 255;
let volLevel = 550;

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 500; i++) {
    raindrops[i] = new Drop();
  }
  remote = new Remote();
  channelDown = new ChannelDown();
  channelUp = new ChannelUp();
  muteBtn = new MuteBtn();
  volUp = new VolUp();
  volDown = new VolDown();
  colorBtn = new ColorBtn();
}

function draw() {
  background(221,246,235);
  speakers();
  visualScreen();
  speakerMovement();
  rain();
  soundGraphics();
  volumeGraphics();

  // Remote Components
  remote.display();
  channelDown.display();
  channelUp.display();
  muteBtn.display();
  volUp.display();
  volDown.display();
  colorBtn.display();

  // Functionality Buttons
  BtnMute();
  BtnVolup();
  BtnVoldown();
}

function speakers(){
  fill(22,24,23);
  rect(50,350,200,400) // Left Speaker
  rect(1050,350,200,400) // Right Speakers
}

function speakerMovement(){
  // Left Speaker
  fill(0);
  noStroke();
  ellipse(150,620,boomBottom); // Bottom Ellipse
  ellipse (150,450,boomTop); // Top Ellipse
  fill(0, 80);
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
  noStroke();
  fill(22,24,23);
  rect(300, 50, 700, 350); // TV
  fill(0);
  rect(315, 65, 670, 320);
}


function rain(){
  for (let i = 0; i < raindrops.length; i++) {
    raindrops[i].fall();
    raindrops[i].show();
  }
}

function soundGraphics(){
  fill(0, soundGraphicOpacity);
  stroke(0, soundGraphicOpacity);
  text('BOOM', 10, 10);
  rect(10, 10, 10, 10);
}

function BtnMute(){
  muteButton = createButton(" ");
  muteButton.position(625,720);
  muteButton.mousePressed(muteBtnClicked);
  muteButton.style('backgroundColor', color(0,0));
  muteButton.style('width', '50px');
  muteButton.style('height', '20px');
  muteButton.style('border-style', 'none');
  muteButton.style('border-style', 'none');
  muteButton.style('cursor', 'pointer');
}

function muteBtnClicked(){
  counter += 1;
  if (counter == 1){
    soundGraphicOpacity = 255;
  }
  if (counter == 2){
    soundGraphicOpacity = 0;
  }
  if (counter == 3){
    counter = 1;
    soundGraphicOpacity = 255;
  }
  console.log(soundGraphicOpacity);
  console.log('clicked');
  console.log(counter);
}

function volumeGraphics(){
  fill(150);
  stroke(150);
  rect(480, 420, 30, 30);
  triangle(520, 410, 520, 460, 480, 435);
  strokeWeight(2);
  line(550, 435, 750, 435);
  strokeWeight(3);
  stroke(0);
  line(550, 435, volLevel, 435);
}

function BtnVolup(){
  volumeUpButton = createButton("  ");
  volumeUpButton.position(585,695);
  volumeUpButton.mousePressed(volUpClicked);
  volumeUpButton.style('backgroundColor', color(0,0));
  volumeUpButton.style('width', '20px');
  volumeUpButton.style('height', '20px');
  volumeUpButton.style('border-style', 'none');
  volumeUpButton.style('border-style', 'none');
  volumeUpButton.style('cursor', 'pointer');
}

function volUpClicked(){
  volLevel += 5;
  if (volLevel >= 750){
    volLevel = 750;
  }
}

function BtnVoldown(){
  volumeDownButton = createButton("  ");
  volumeDownButton.position(585,730);
  volumeDownButton.mousePressed(volDownClicked);
  volumeDownButton.style('backgroundColor', color(0,0));
  volumeDownButton.style('width', '20px');
  volumeDownButton.style('height', '20px');
  volumeDownButton.style('border-style', 'none');
  volumeDownButton.style('border-style', 'none');
  volumeDownButton.style('cursor', 'pointer');
}

function volDownClicked(){
  volLevel -= 5;
  if (volLevel <= 550){
    volLevel = 550;
  }
}
