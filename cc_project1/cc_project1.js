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
let volumeDownButton;
let colorMuteButton;
let channelUpButton;

// Button Functionality
let muteCounter = 0;
let colorCounter = 0;
let channelCounter = 0;
let soundGraphicOpacity = 0;
let volLevel = 550;
let pitterPatterSize = 10;
let bCol = 0;
let mutedPersonOpacity = 0;


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
  // Functionality Buttons
  BtnVolup();
  BtnVoldown();
  BtnColor();
  BtnChannelUp();
  BtnMute();
}

function draw() {
  background(221,246,235);
  speakers();
  visualScreen();
  speakerMovement();
  rain();
  soundGraphics();
  volumeGraphics();
  mutedPerson();
  colorButtons();
  // Remote Components
  remote.display();
  channelDown.display();
  channelUp.display();
  muteBtn.display();
  volUp.display();
  volDown.display();
  colorBtn.display();

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
  if (muteCounter == 1){
    boomBottom += 0.5;
    boomTop += 0.5;

    if (boomBottom == 140 && boomTop == 100){
      boomBottom = 130;
      boomTop = 90;
    }
  }
  if (muteCounter == 2){
    boomBottom = 130;
    boomTop = 90;
  }
  if (muteCounter == 3 ){
    muteCounter = 1;
    boomBottom += 0.5;
    boomTop += 0.5;

    if (boomBottom == 140 && boomTop == 100){
      boomBottom = 130;
      boomTop = 90;
    }
  }
}

function visualScreen(){
  noStroke();
  fill(22,24,23);
  rect(300, 50, 700, 350); // TV
  fill(bCol);
  rect(315, 65, 670, 320);
}


function rain(){
  for (let i = 0; i < raindrops.length; i++) {
    raindrops[i].fall();
    raindrops[i].show();
  }
}

function mutedPerson(){
  stroke(255, mutedPersonOpacity);
  noFill();
  ellipse (650, 200, 150);
  line(650, 278, 650, 383);
  line(625, 180, 605, 190);
  line(675, 180, 695, 190);
  strokeWeight(10);
  stroke(150, mutedPersonOpacity);
  line(635, 245, 665, 215);
  line(635, 215, 665, 245);
  stroke(255, mutedPersonOpacity);
  fill(255, mutedPersonOpacity);
  ellipse(800, 150, 80, 40); // word bubble
  strokeWeight(3);
  triangle(770, 160, 810, 160, 760, 200);

}

function BtnMute(){
  muteButton = createButton(" ");
  muteButton.position(625,720);
  muteButton.mousePressed(muteBtnClicked);
  muteButton.style('backgroundColor', color(0,0));
  muteButton.style('width', '50px');
  muteButton.style('height', '20px');
  muteButton.style('border-style', 'none');
  muteButton.style('cursor', 'pointer');
}

function muteBtnClicked(){
  muteCounter += 1;

  if (muteCounter == 1){
    soundGraphicOpacity = 255;
  }
  if (muteCounter == 2){
    soundGraphicOpacity = 0;
  }
  if (muteCounter == 3 ){
    muteCounter = 1;
    soundGraphicOpacity = 255;
  }
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
  volumeUpButton.style('cursor', 'pointer');
}

function volUpClicked(){
  volLevel += 5;
  pitterPatterSize += 2;
  if (volLevel >= 750 || pitterPatterSize >= 50){
    volLevel = 750;
    pitterPatterSize = 50;
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
  volumeDownButton.style('cursor', 'pointer');
}

function volDownClicked(){
  volLevel -= 5;
  pitterPatterSize -= 2;
  if (volLevel <= 550 || pitterPatterSize <= 10){
    volLevel = 550;
    pitterPatterSize = 10;
  }
}

function BtnChannelUp(){
  channelUpButton = createButton("  ");
  channelUpButton.position(690, 695);
  channelUpButton.mousePressed(channelUpClicked);
  channelUpButton.style('backgroundColor', color(0,0));
  channelUpButton.style('width', '20px');
  channelUpButton.style('height', '20px');
  channelUpButton.style('border-style', 'none');
  channelUpButton.style('cursor', 'pointer');
}

function channelUpClicked(){
  channelCounter += 1;
  for (let i = 0; i < raindrops.length; i++) {
    if (channelCounter == 1){
      raindrops[i].col = color(150,255);
      mutedPersonOpacity = 0;
    }
    if  (channelCounter == 2){
      raindrops[i].col = color(150,0);
      mutedPersonOpacity = 255;
    }
    if (channelCounter == 3){
      channelCounter = 1;
      raindrops[i].col = color(150,255);
      mutedPersonOpacity = 0;
    }
  }
}

function BtnColor(){
  colorMuteButton = createButton("  ");
  colorMuteButton.position(620,545);
  colorMuteButton.mousePressed(colorMuteClicked);
  colorMuteButton.style('backgroundColor', color(0,0));
  colorMuteButton.style('width', '60px');
  colorMuteButton.style('height', '25px');
  colorMuteButton.style('border-style', 'none');
  colorMuteButton.style('cursor', 'pointer');
}

function colorMuteClicked(){
  colorCounter += 1;
}


function soundGraphics(){
  fill(0, soundGraphicOpacity);
  stroke(0, soundGraphicOpacity);
  textSize(pitterPatterSize);
  text("pitter", 1100, 300);
  text("patter", 200, 300);
  text("pitter", 900, 600);
  text("patter", 300, 600);
  textSize(pitterPatterSize + 10);
  text("patter", 1200, 300);
  text("pitter", 150, 250);
  text("pitter", 350, 500);
  text("patter", 950, 500);

  if (muteCounter == 1){
  soundGraphicOpacity += 2;

  if (soundGraphicOpacity >= 255){
    soundGraphicOpacity = 5;
  }
  }
}

function colorButtons(){
  for (let i = 0; i < raindrops.length; i++) {
      if (colorCounter == 1 && channelCounter == 1){
        raindrops[i].col = color(237,32,141);
        bCol = '#cefbff';
      }
      if  (colorCounter == 2 && channelCounter == 1){
        raindrops[i].col = color(150);
        bCol = 0;
      }
      if (colorCounter == 3 && channelCounter == 1){
        colorCounter = 1;
        raindrops[i].col = color(237,32,141);
        bCol = '#cefbff'
      }
    }
    if (colorCounter == 1 && channelCounter == 2){
      bCol = '#d08442';
    }
    if (colorCounter == 2 && channelCounter == 2){
      bCol = 0;
    }
    if (colorCounter == 3 && channelCounter == 2 || channelCounter == 3){
      bCol = '#d08442';
      colorCounter = 1;
    }
}
