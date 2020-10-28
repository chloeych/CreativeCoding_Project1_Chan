function MusicGraphics(){
  x = 120;
  y = 100;

  this.display = function(x, y, scale){

  fill(0, soundGraphicOpacity);
  stroke(0, soundGraphicOpacity);
  ellipse(x, y + 40, 20);
  ellipse(x + 40, y + 50, 20);
  strokeWeight(5);
  line(x + 10, y + 40, x + 10, y);
  line(x + 50, y + 50, x + 50, y);
  line(x + 10, y, x + 50, y);

  }
}
