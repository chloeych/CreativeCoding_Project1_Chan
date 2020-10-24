function remote(){
  fill(22,24,23);
  rect(560, 500, 175, 400, 20); // Remote
  fill(0,100);

  // Remote Buttons
  noStroke();
  ellipse(600,525,30); // powerBtn shadow
  fill(198,7,7);// red
  ellipse(600,525,25);// powerBtn
  fill(0);
  rect(620,545,60,25,20); // backBtn
  circle(650, 630, 100); // arrowBtn OuterCircle
  fill(100);
  circle(650, 630, 30); // arrowBtn innerCircle
  fill(0);
  rect(580, 690, 30, 70, 20); // Vol
  rect(685, 690, 30, 70, 20); // Channel
  rect(625, 720, 45, 20, 20); // muteBtn
  fill(150);
  triangle(625, 620, 625, 640, 610, 630); // left btn
  triangle(675, 620, 675, 640, 690, 630); // right btn
  triangle(640, 605, 650, 590, 660, 605); // up btn
  triangle(640, 655, 650, 670, 660, 655); // down btn
  triangle(695, 710, 700, 700, 705, 710); // channelUp Btn
  triangle(695, 735, 700, 745, 705, 735); // channelDownBtn
  strokeWeight(3);
  stroke(150);
  line(590, 705, 600, 705); // vol up btn
  line(595, 700, 595, 710);
  line(590, 740, 600, 740); // vol down btn


  // mute
  rect(638, 728, 4, 4);
  triangle(645, 727, 645, 733, 640, 730);
  strokeWeight(1);
  line(650, 735, 660, 725);
  line(650, 725, 660, 735);

  // color symbols
  noStroke();
  fill(255,0,0,150);
  ellipse(640,557,15);
  fill(0,128,0,150);
  ellipse(650,557,15);
  fill(0,0,255,150);
  ellipse(660,557,15);



  // Remote Text
  strokeWeight(0.5);
  textStyle(BOLD);
  fill(150);
  textSize(10);
  text('CH', 693, 726);
  textSize(9);
  text('VOL', 585, 726);
  textSize(8);


}
